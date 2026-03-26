const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ===== CONFIGURATION =====
const TARGET_USERNAME = 'nirankush';
const OUTPUT_FILE = path.join(__dirname, '../public/instagram_posts.json');
const IMAGES_FOLDER = path.join(__dirname, '../public/instagram_images');
// =========================

// Ensure directories
if (!fs.existsSync(path.dirname(OUTPUT_FILE))) {
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
}
if (!fs.existsSync(IMAGES_FOLDER)) {
    fs.mkdirSync(IMAGES_FOLDER, { recursive: true });
}

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
};

async function downloadImage(url, filename) {
    const filepath = path.join(IMAGES_FOLDER, filename);
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            headers: HEADERS
        });

        return new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(filepath);
            response.data.pipe(writer);
            let error = null;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) resolve(`/instagram_images/${filename}`);
            });
        });
    } catch (e) {
        console.error(`❌ Failed to download ${url}`);
        return null;
    }
}

async function scrapePicuki(username) {
    console.log(`🔍 Scraping Picuki mirror for @${username}...`);
    const url = `https://www.picuki.com/profile/${username}`;

    try {
        const response = await axios.get(url, { headers: HEADERS });
        const html = response.data;

        const posts = [];
        const imageRegex = /<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g;
        let match;

        while ((match = imageRegex.exec(html)) !== null) {
            let src = match[1];
            const alt = match[2];

            if (src.includes('scontent') || src.includes('cdninstagram') || src.includes('picuki')) {
                src = src.replace(/&amp;/g, '&');
                const id = crypto.createHash('md5').update(src).digest('hex').substring(0, 10);

                posts.push({
                    id: id,
                    url: `https://www.instagram.com/${username}`,
                    originalImageOrigin: src,
                    caption: alt ? alt.trim() : '',
                    fetchedAt: new Date().toISOString()
                });
            }
        }

        const uniquePosts = [];
        const seenIds = new Set();

        for (const p of posts) {
            if (!seenIds.has(p.id) && uniquePosts.length < 12) {
                seenIds.add(p.id);
                console.log(`Downloading image for post ${p.id}...`);
                const localPath = await downloadImage(p.originalImageOrigin, `${p.id}.jpg`);
                if (localPath) {
                    p.localImagePath = localPath;
                    p.displayUrl = localPath; // fallback
                    uniquePosts.push(p);
                }
            }
        }

        console.log(`✅ Successfully downloaded ${uniquePosts.length} posts.`);
        return uniquePosts;

    } catch (error) {
        console.error('❌ Scraping failed:', error.message);
        return [];
    }
}

async function main() {
    const posts = await scrapePicuki(TARGET_USERNAME);

    if (posts.length > 0) {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
        console.log(`💾 Saved ${posts.length} posts to ${OUTPUT_FILE}`);
    } else {
        console.log("⚠️ No posts found via mirror.");
    }
}

main();
