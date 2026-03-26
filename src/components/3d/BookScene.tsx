"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { MotionValue } from "framer-motion";
import { BookModel } from "./BookModel";

interface BookSceneProps {
    scrollProgress: MotionValue<number>;
}

export function BookScene({ scrollProgress }: BookSceneProps) {
    return (
        <Canvas shadows gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={35} />

            {/* Lighting Setup for "Soft shadows, Matte finish" */}
            <ambientLight intensity={0.7} color="#ffffff" />
            <directionalLight
                position={[5, 10, 5]}
                intensity={0.8}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                position={[-5, 5, 10]}
                angle={0.4}
                penumbra={1}
                intensity={0.5}
                color="#fff5e6" // Warm light
            />

            <Suspense fallback={null}>
                {/* City preset gives nice reflections for the subtle texture */}
                <Environment preset="city" environmentIntensity={0.5} />
                <BookModel scrollProgress={scrollProgress} />
            </Suspense>
        </Canvas>
    );
}
