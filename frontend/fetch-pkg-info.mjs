import https from 'https';
import fs from 'fs';

const packages = [
  ['@img/sharp-darwin-arm64', '0.34.5'],
  ['@img/sharp-darwin-x64', '0.34.5'],
  ['@img/sharp-linux-arm', '0.34.5'],
  ['@img/sharp-linux-arm64', '0.34.5'],
  ['@img/sharp-linux-ppc64', '0.34.5'],
  ['@img/sharp-linux-riscv64', '0.34.5'],
  ['@img/sharp-linux-s390x', '0.34.5'],
  ['@img/sharp-linux-x64', '0.34.5'],
  ['@img/sharp-linuxmusl-arm64', '0.34.5'],
  ['@img/sharp-linuxmusl-x64', '0.34.5'],
  ['@img/sharp-wasm32', '0.34.5'],
  ['@img/sharp-win32-arm64', '0.34.5'],
  ['@img/sharp-win32-ia32', '0.34.5'],
  ['@img/sharp-libvips-darwin-arm64', '1.2.4'],
  ['@img/sharp-libvips-darwin-x64', '1.2.4'],
  ['@img/sharp-libvips-linux-arm', '1.2.4'],
  ['@img/sharp-libvips-linux-arm64', '1.2.4'],
  ['@img/sharp-libvips-linux-ppc64', '1.2.4'],
  ['@img/sharp-libvips-linux-riscv64', '1.2.4'],
  ['@img/sharp-libvips-linux-s390x', '1.2.4'],
  ['@img/sharp-libvips-linux-x64', '1.2.4'],
  ['@img/sharp-libvips-linuxmusl-arm64', '1.2.4'],
  ['@img/sharp-libvips-linuxmusl-x64', '1.2.4'],
  ['@emnapi/core', '1.10.0'],
  ['@emnapi/runtime', '1.10.0'],
  ['@emnapi/wasi-threads', '1.2.1'],
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
fs.writeFileSync('pkginfo.json', JSON.stringify(results, null, 2));
console.log('Done. Results:');
results.forEach(r => {
  if (r.error) console.log(`ERROR: ${r.name}: ${r.error}`);
  else console.log(`OK: ${r.name}@${r.version} integrity: ${r.integrity.slice(0, 50)}...`);
});
