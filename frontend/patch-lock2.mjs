import fs from 'fs';

const pkgInfo1 = JSON.parse(fs.readFileSync('pkginfo.json', 'utf8'));
const pkgInfo2 = JSON.parse(fs.readFileSync('pkginfo2.json', 'utf8'));
const allInfo = [...pkgInfo1, ...pkgInfo2];
const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

// Build a lookup map
const info = {};
allInfo.forEach(p => {
  if (!p.error) info[`${p.name}@${p.version}`] = p;
});

function getInfo(name, version) {
  const key = `${name}@${version}`;
  const d = info[key];
  if (!d) throw new Error(`No info for ${key}`);
  return d;
}

// 1. Add @emnapi/core@1.11.3 at top level (needed by @napi-rs/wasm-runtime and @tailwindcss/oxide-wasm32-wasi)
if (!lock.packages['node_modules/@emnapi/core']) {
  const d = getInfo('@emnapi/core', '1.11.3');
  lock.packages['node_modules/@emnapi/core'] = {
    version: d.version,
    resolved: d.tarball,
    integrity: d.integrity,
    license: 'MIT',
  };
  console.log('Added: node_modules/@emnapi/core@1.11.3');
} else {
  console.log('Exists: node_modules/@emnapi/core:', lock.packages['node_modules/@emnapi/core'].version);
}

// 2. Add @emnapi/runtime@1.11.3 at top level
if (!lock.packages['node_modules/@emnapi/runtime']) {
  const d = getInfo('@emnapi/runtime', '1.11.3');
  lock.packages['node_modules/@emnapi/runtime'] = {
    version: d.version,
    resolved: d.tarball,
    integrity: d.integrity,
    license: 'MIT',
  };
  console.log('Added: node_modules/@emnapi/runtime@1.11.3');
} else {
  console.log('Exists: node_modules/@emnapi/runtime:', lock.packages['node_modules/@emnapi/runtime'].version);
}

// 3. Add @emnapi/wasi-threads@1.2.3 nested under @tailwindcss/oxide-wasm32-wasi
// (CI on Linux resolves ^1.2.2 to 1.2.3, Windows resolved to 1.2.2)
// We need to add 1.2.3 AND keep 1.2.2 — or just update to 1.2.3 since it satisfies ^1.2.2
// The CI error says "lock file's @emnapi/wasi-threads@1.2.1 does not satisfy @emnapi/wasi-threads@1.2.3"
// This means ci expects 1.2.3 at node_modules/@emnapi/wasi-threads (top level)
// But @unrs wants exactly 1.2.1 so we need nested entries for both

// Update top-level @emnapi/wasi-threads to 1.2.3 (what @tailwindcss needs via hoisting)
// Move the @unrs nested one to 1.2.1 which is already done
const d123 = getInfo('@emnapi/wasi-threads', '1.2.3');
lock.packages['node_modules/@emnapi/wasi-threads'] = {
  version: d123.version,
  resolved: d123.tarball,
  integrity: d123.integrity,
  license: 'MIT',
};
console.log('Updated: node_modules/@emnapi/wasi-threads -> 1.2.3');

// Also update the nested tailwindcss one from 1.2.2 to 1.2.3
const twWasiKey = 'node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/wasi-threads';
if (lock.packages[twWasiKey]) {
  lock.packages[twWasiKey] = {
    ...lock.packages[twWasiKey],
    version: d123.version,
    resolved: d123.tarball,
    integrity: d123.integrity,
  };
  console.log('Updated: ' + twWasiKey + ' -> 1.2.3');
}

// Verify no blank versions
const bad = Object.entries(lock.packages)
  .filter(([k, v]) => k !== '' && (v.version === '' || v.version === undefined || v.version === null))
  .map(([k]) => k);
console.log('\nBlank versions remaining:', bad.length === 0 ? 'none' : bad);

fs.writeFileSync('package-lock.json', JSON.stringify(lock, null, 2) + '\n');
console.log('Lock file updated. Total packages:', Object.keys(lock.packages).length);

// Summary of @emnapi entries
console.log('\n@emnapi/* entries:');
Object.entries(lock.packages)
  .filter(([k]) => k.includes('@emnapi/'))
  .forEach(([k, v]) => console.log(' ', k + ':', v.version));
