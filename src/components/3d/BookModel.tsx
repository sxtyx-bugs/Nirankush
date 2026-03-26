"use client";

import React, { useRef, useState, useEffect, Suspense, Component, ErrorInfo, ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Image as DreiImage } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface InstagramPost {
    id: string;
    localImagePath: string;
    caption: string;
    url: string;
}

// Error Boundary specifically to catch Three.js TextureLoader crashes from expired CDN URLs
class ImageErrorBoundary extends Component<{ children: ReactNode, fallback: ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.warn("Instagram Image Load Failed (CDN Expired):", error.message);
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

// Reusable Page Component - Minimal Design (Only Image)
function InstagramPage({ post }: { post?: InstagramPost }) {
    if (!post) return (
        <group>
            <Text position={[0, 0, 0.02]} fontSize={0.2} color="#999">
                Loading...
            </Text>
        </group>
    );

    return (
        <group>
            {/* Image Frame Background */}
            <mesh position={[0, 0.5, 0.01]}>
                <planeGeometry args={[4.5, 4.5]} />
                <meshBasicMaterial color="#eee" />
            </mesh>

            {/* Image - Centered and Larger since text is removed */}
            <ImageErrorBoundary fallback={
                <group position={[0, 0.5, 0.02]}>
                    <mesh>
                        <planeGeometry args={[4.2, 4.2]} />
                        <meshBasicMaterial color="#ddd" />
                    </mesh>
                    <Text position={[0, 0, 0.01]} fontSize={0.25} color="#888" maxWidth={4} textAlign="center">
                        Image Expired
                    </Text>
                </group>
            }>
                <Suspense fallback={
                    <mesh position={[0, 0.5, 0.02]}>
                        <planeGeometry args={[4.2, 4.2]} />
                        <meshBasicMaterial color="#ddd" />
                    </mesh>
                }>
                    <DreiImage
                        url={post.localImagePath}
                        // @ts-ignore
                        crossOrigin="anonymous"
                        scale={[4.2, 4.2]}
                        position={[0, 0.5, 0.02]}
                        toneMapped={false}
                    />
                </Suspense>
            </ImageErrorBoundary>
        </group>
    );
}

interface BookModelProps {
    scrollProgress: MotionValue<number>;
}

export function BookModel({ scrollProgress }: BookModelProps) {
    const group = useRef<THREE.Group>(null);
    const coverGroupRef = useRef<THREE.Group>(null);

    // State lifted to BookModel
    const [index, setIndex] = useState(0);
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch Logic
    useEffect(() => {
        async function fetchDataset() {
            try {
                let data: any[] = [];

                // Attempt live fetch first (risky but requested feature)
                try {
                    const apiRes = await fetch('/api/instagram');
                    if (apiRes.ok) {
                        const apiData = await apiRes.json();
                        if (Array.isArray(apiData) && apiData.length > 0 && !apiData[0].error) {
                            data = apiData;
                        }
                    }
                } catch (e) {
                    console.warn("Live Instagram scrape failed, using fallback.");
                }

                // Fallback to static dataset if live fetch failed
                if (data.length === 0) {
                    const res = await fetch('/dataset.json');
                    if (!res.ok) throw new Error("Dataset fetch failed");
                    data = await res.json();
                }

                if (Array.isArray(data) && data.length > 0) {
                    // Skip first 6 items (slice(6)) to aggressively avoid black thumbnails
                    // Take next 50 items for a rich, non-repetitive feed
                    const mappedPosts = data.slice(6, 56).map((post: any) => ({
                        id: post.id || Math.random().toString(36),
                        // Use wsrv.nl proxy to bypass CORS restrictions for WebGL
                        localImagePath: `https://wsrv.nl/?url=${encodeURIComponent(post.displayUrl)}&w=600`,
                        caption: post.caption || '',
                        url: post.url || `https://www.instagram.com/p/${post.id}`
                    }));

                    setPosts(mappedPosts);
                    setLoading(false);
                } else {
                    throw new Error("Dataset is empty");
                }
            } catch (err) {
                console.error("Failed to load dataset", err);
                setError("Archive unavailable");
                setLoading(false);
            }
        }
        fetchDataset();
    }, []);

    // Carousel Logic (Increment by 2 to flip pages)
    useEffect(() => {
        if (!posts.length) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 2) % posts.length);
        }, 8000); // Change pages every 8 seconds
        return () => clearInterval(interval);
    }, [posts.length]);

    // Materials
    const coverMaterial = new THREE.MeshStandardMaterial({
        color: "#4a4036", // Dark brownish/grey
        roughness: 0.8,
    });

    const pageMaterial = new THREE.MeshStandardMaterial({
        color: "#fdfbf7", // Off-white
        roughness: 0.9,
    });

    // Animation Logic
    useFrame((state) => {
        const progress = scrollProgress.get();

        if (group.current && coverGroupRef.current) {
            const time = state.clock.getElapsedTime();
            const floatY = Math.sin(time) * 0.1;

            let targetGroupRotationY = 0;
            let targetX = -3;
            let targetZ = 0;
            let targetY = -0.5;

            if (progress > 0) {
                if (progress <= 0.3) {
                    const t = progress / 0.3;
                    targetGroupRotationY = THREE.MathUtils.lerp(0, -0.3, t);
                } else {
                    targetGroupRotationY = -0.3;
                }
            }

            let targetCoverOpen = 0;
            if (progress > 0.1) {
                const t = Math.min((progress - 0.1) / 0.7, 1);
                targetCoverOpen = THREE.MathUtils.lerp(0, -Math.PI, t);
                targetX = THREE.MathUtils.lerp(-3, 0, t);
            }

            if (progress > 0.7) {
                const t = (progress - 0.7) / 0.3;
                targetZ = THREE.MathUtils.lerp(0, 2, t);
                targetGroupRotationY = THREE.MathUtils.lerp(-0.3, 0, t);
            }

            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetGroupRotationY, 0.08);
            group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.08);
            group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetZ, 0.08);
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY + floatY, 0.08);

            coverGroupRef.current.rotation.y = THREE.MathUtils.lerp(coverGroupRef.current.rotation.y, targetCoverOpen, 0.08);
        }
    });

    return (
        <group ref={group} rotation={[0, 0, 0]}>
            {/* --- SPINE --- */}
            <mesh position={[0, 0, 0.2]} castShadow receiveShadow material={coverMaterial}>
                <boxGeometry args={[0.6, 9.2, 0.6]} />
            </mesh>

            {/* --- BACK COVER (Right Side) --- */}
            <mesh position={[3.25, 0, -0.05]} castShadow receiveShadow material={coverMaterial}>
                <boxGeometry args={[6, 9.2, 0.1]} />
            </mesh>

            {/* --- RIGHT PAGE BLOCK --- */}
            <mesh position={[3.15, 0, 0.18]} castShadow receiveShadow material={pageMaterial}>
                <boxGeometry args={[5.8, 9, 0.36]} />
            </mesh>

            {/* --- CONTENT: RIGHT PAGE --- */}
            <group position={[3.15, 0, 0.37]}>
                {!loading && posts.length > 0 ? (
                    <InstagramPage
                        post={posts[(index + 1) % posts.length]}
                    />
                ) : (
                    <Text position={[0, 0, 0.01]} fontSize={0.3} color="#999">{error || "Loading..."}</Text>
                )}
            </group>

            {/* --- FRONT COVER GROUP --- */}
            <group ref={coverGroupRef} position={[-0.25, 0, 0.45]}>
                <group position={[3.25, 0, 0]}>

                    {/* --- FRONT COVER MESH --- */}
                    <mesh position={[0, 0, 0]} castShadow receiveShadow material={coverMaterial}>
                        <boxGeometry args={[6, 9.2, 0.1]} />
                    </mesh>

                    {/* --- FRONT COVER TEXT --- */}
                    <group position={[0, 0, 0.06]}>
                        <Text position={[0, 1.5, 0]} fontSize={0.9} color="#d1c4b7" font="/fonts/Khand-Bold.ttf" letterSpacing={0.05}>
                            NIRANKUSH
                        </Text>
                        <Text position={[0, -3.5, 0]} fontSize={0.25} color="#8a7e72" font="/fonts/Khand-Regular.ttf" letterSpacing={0.2}>
                            THE ARCHIVE
                        </Text>
                        <mesh position={[-2.5, 0, 0]}>
                            <planeGeometry args={[0.05, 8.5]} />
                            <meshBasicMaterial color="#5d5045" />
                        </mesh>
                    </group>

                    {/* --- INSIDE LEFT PAGE --- */}
                    <group position={[0, 0, -0.06]} rotation={[0, Math.PI, 0]}>

                        {/* Page Paper - Now matching Right Page style */}
                        <mesh position={[0, 0, 0]} receiveShadow material={pageMaterial}>
                            <boxGeometry args={[5.8, 9, 0.05]} />
                        </mesh>

                        {/* Content: Left Page Feed */}
                        <group position={[0, 0, 0.03]}>
                            {!loading && posts.length > 0 ? (
                                <InstagramPage
                                    post={posts[index]}
                                />
                            ) : null}
                        </group>
                    </group>

                </group>
            </group>
        </group>
    );
}
