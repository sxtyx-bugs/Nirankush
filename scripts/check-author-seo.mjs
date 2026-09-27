import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

// Run against a built local server or the deployed site.
// Checks actual HTTP behavior, including the interaction of redirects and rewrites.
const origin = process.argv[2] || 'http://localhost:3127';
const canonicalOrigin = 'https://www.nirankush.com';
const root = 'public/authority-static';
const files = await readdir(root, { recursive: true });
let checked = 0;
for (const file of files.filter(file => file.endsWith('index.html'))) {
  const route = '/' + file.replace(/(^|\/)index\.html$/, '');
  const clean = route === '/' ? '/' : route.replace(/\/$/, '');
  const response = await fetch(origin + clean, { redirect: 'manual' });
  assert.equal(response.status, 200, `${clean} must return 200, not a redirect loop`);
  const html = await response.text();
  const expected = await readFile(path.join(root, file), 'utf8');
  assert.equal(html, expected, `${clean} must serve the checked-in author content`);
  assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin}${clean}"`), `${clean}: canonical`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${clean}: one H1`);
  assert.ok(!/noindex/i.test(html), `${clean}: indexable`);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  assert.ok(blocks.length, `${clean}: structured data`);
  const schemas = blocks.map(match => JSON.parse(match[1]));
  if (clean === '/nirankush') {
    const profile = schemas.find(schema => schema['@type'] === 'ProfilePage');
    assert.equal(profile.mainEntity['@id'], canonicalOrigin + '/#nirankush');
    assert.equal(profile.mainEntity['@type'], 'Person');
  }
  if (clean === '/sahyajinashi') {
    const book = schemas.find(schema => schema['@type'] === 'Book');
    assert.equal(book['@id'], canonicalOrigin + '/#sahyajinashi');
    assert.equal(book.author['@id'], canonicalOrigin + '/#nirankush');
  }
  const duplicate = await fetch(origin + '/authority-static/' + file, { redirect: 'manual' });
  assert.equal(duplicate.status, 308, `${file}: permanent redirect`);
  assert.equal(new URL(duplicate.headers.get('location'), origin).pathname, clean);
  checked++;
}
const robots = await (await fetch(origin + '/robots.txt')).text();
assert.ok(robots.includes('Sitemap: ' + canonicalOrigin + '/sitemap.xml'));
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, checked);
console.log(`PASS: ${checked} public pages, JSON-LD, canonicals, duplicate redirects, robots and sitemap at ${origin}`);
