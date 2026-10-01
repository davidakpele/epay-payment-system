import https from 'https';
import fs from 'fs';

const packages = [
  ['@emnapi/core', '1.11.3'],
  ['@emnapi/runtime', '1.11.3'],
  ['@emnapi/wasi-threads', '1.2.3'],
];

function fetchPkg(name, version) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(name);
    const url = `https://registry.npmjs.org/${encoded}/${version}`;
    https.get(url, { headers: { 'User-Agent': 'node' } }, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ name, version, tarball: json.dist.tarball, integrity: json.dist.integrity });
        } catch (e) {
          reject(new Error(`parse error for ${name}: ${e.message.slice(0, 80)}`));
        }
      });
    }).on('error', reject);
  });
}

const results = await Promise.all(packages.map(([n, v]) => fetchPkg(n, v).catch(e => ({ name: n, version: v, error: e.message }))));
fs.writeFileSync('pkginfo2.json', JSON.stringify(results, null, 2));
results.forEach(r => {
  if (r.error) console.log(`ERROR: ${r.name}: ${r.error}`);
  else console.log(`OK: ${r.name}@${r.version} integrity: ${r.integrity.slice(0, 60)}...`);
});
