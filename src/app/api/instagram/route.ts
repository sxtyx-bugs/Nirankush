
import { NextResponse } from 'next/server';

export async function GET() {
    const username = 'nirankush';
    const url = `https://www.instagram.com/${username}/`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Instagram profile: ${response.status}`);
        }

        const html = await response.text();

        // Attempt to parse text content from HTML directly if JSON blob isn't easy
        // This is highly experimental as Instagram changes structure frequently.
        // We look for patterns like shortcodes or image URLs.

        // Alternative: Return a mock error forcing fallback if we can't parse reliable data
        // For now, let's try to find image URLs
        const imageRegex = /"display_url":"([^"]+)"/g;
        const captionRegex = /"edge_media_to_caption":{"edges":\[{"node":{"text":"([^"]+)"}}/g;

        // This is brittle. A better way for a "hacky" solution without Cheerio is hard.
        // But let's try to extract at least some images.

        const matches = [];
        let match;
        while ((match = imageRegex.exec(html)) !== null) {
            matches.push(match[1].replace(/\\u0026/g, '&'));
        }

        if (matches.length > 0) {
            // Construct a simple format matching our dataset
            const posts = matches.slice(0, 12).map((imgUrl, index) => ({
                id: `live-${index}`,
                displayUrl: imgUrl,
                caption: "Live fetch",
                url: `https://instagram.com/${username}`
            }));
            return NextResponse.json(posts);
        }

        // If we can't scrape (likely login wall), return 404 to trigger fallback
        return NextResponse.json({ error: "Scraping blocked" }, { status: 404 });

    } catch (error) {
        console.error("Instagram scrape failed:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
