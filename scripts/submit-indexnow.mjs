import { readFile } from 'node:fs/promises';

const origin = 'https://www.nirankush.com';
const keyLocation = `${origin}/indexnow-key.txt`;
const key = (await readFile(new URL('../public/indexnow-key.txt', import.meta.url), 'utf8')).trim();
const paths = process.argv.slice(2);
if (!paths.length) throw new Error('Specify changed paths, for example: node scripts/submit-indexnow.mjs / /nirankush /sahyajinashi');
const urlList = [...new Set(paths.map(path => {
  const url = new URL(path, origin);
  if (url.origin !== origin || url.search || url.hash) throw new Error(`Not a canonical site URL: ${path}`);
  return url.href;
}))];
const verification = await fetch(keyLocation, { signal: AbortSignal.timeout(15000) });
if (!verification.ok || (await verification.text()).trim() !== key) throw new Error('Publish the ownership file before submitting URLs.');
const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(origin).host, key, keyLocation, urlList }),
  signal: AbortSignal.timeout(30000),
});
console.log(JSON.stringify({ time: new Date().toISOString(), status: response.status, urlList, meaning: response.status === 200 ? 'Received; indexing and ranking are not guaranteed.' : response.status === 202 ? 'Received; ownership validation pending.' : await response.text() }, null, 2));
if (![200, 202].includes(response.status)) process.exitCode = 1;
