import fs from 'fs';

const pkgInfo = JSON.parse(fs.readFileSync('pkginfo.json', 'utf8'));
const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

// Build a lookup map from pkginfo
const info = {};
pkgInfo.forEach(p => {
  if (!p.error) info[`${p.name}@${p.version}`] = p;
});

// Helper to create a minimal optional package entry
function makeEntry(name, version, opts = {}) {
  const key = `${name}@${version}`;
  const d = info[key];
  if (!d) throw new Error(`No info for ${key}`);
  return {
    version: d.version,
    resolved: d.tarball,
    integrity: d.integrity,
    optional: true,
    ...opts
  };
}

// 1. Add all missing @img/sharp-* platform packages under node_modules/
const sharpOptionals = [
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
];

for (const [name, version] of sharpOptionals) {
  const pkgKey = `node_modules/${name}`;
  if (!lock.packages[pkgKey]) {
    lock.packages[pkgKey] = makeEntry(name, version);
    console.log(`Added: ${pkgKey}`);
  } else {
    console.log(`Exists: ${pkgKey}`);
  }
}

// 2. Fix @emnapi/wasi-threads: need 1.2.1 entry (already exists but version mismatch might be there)
// The error says lock has @emnapi/wasi-threads@1.2.1 but CI wants @emnapi/wasi-threads@1.2.3
// @emnapi/core@1.10.0 wants wasi-threads@1.2.1 - so we need BOTH 1.2.1 and 1.2.3 in the lock
// Check current state
const emnapiWasi = lock.packages['node_modules/@emnapi/wasi-threads'];
console.log('\nCurrent @emnapi/wasi-threads top-level:', emnapiWasi?.version);

// We need:
// node_modules/@emnapi/wasi-threads -> 1.2.3 (for @emnapi/core@1.11.3 which needs 1.2.3)
// node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/wasi-threads -> 1.2.1
// (for @emnapi/core@1.10.0 which needs 1.2.1)

// Check what we have
const emnapiCore10 = lock.packages['node_modules/@emnapi/core'];  // should be 1.10.0 nested
console.log('\nAll @emnapi entries:');
Object.keys(lock.packages)
  .filter(k => k.includes('@emnapi/') || k.includes('@napi-rs/'))
  .forEach(k => console.log(' ', k, lock.packages[k].version));

// Add missing @emnapi/core@1.10.0 and @emnapi/runtime@1.10.0
// These should be nested under @unrs/resolver-binding-wasm32-wasi
const emnapiCore10Key = 'node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/core';
if (!lock.packages[emnapiCore10Key]) {
  lock.packages[emnapiCore10Key] = makeEntry('@emnapi/core', '1.10.0');
  console.log(`Added: ${emnapiCore10Key}`);
}

const emnapiRuntime10Key = 'node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/runtime';
if (!lock.packages[emnapiRuntime10Key]) {
  lock.packages[emnapiRuntime10Key] = makeEntry('@emnapi/runtime', '1.10.0');
  console.log(`Added: ${emnapiRuntime10Key}`);
}

// Fix @emnapi/wasi-threads: top-level should be 1.2.3, nested under @unrs should be 1.2.1
// Current top-level is 1.2.1 - need to add 1.2.3 at top level and keep 1.2.1 nested
const wasi12_1 = info['@emnapi/wasi-threads@1.2.1'];
const wasi12_3 = lock.packages['node_modules/@emnapi/wasi-threads'];

if (wasi12_3 && wasi12_3.version === '1.2.1') {
  // Move it to nested, add 1.2.3 at top level
  // But we don't have 1.2.3 info fetched - let's check what's in the lock already
  console.log('\n@emnapi/wasi-threads top is 1.2.1, needs to also include 1.2.3 for @emnapi/core@1.11.3');
  // Keep the nested entry for @unrs
  const wasi12_1NestedKey = 'node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/wasi-threads';
  if (!lock.packages[wasi12_1NestedKey]) {
    lock.packages[wasi12_1NestedKey] = makeEntry('@emnapi/wasi-threads', '1.2.1');
    console.log(`Added nested: ${wasi12_1NestedKey}`);
  }
}

// Check @emnapi/tailwindcss oxide nested entry (already exists)
console.log('\nTailwindcss oxide @emnapi/wasi-threads:', 
  lock.packages['node_modules/@tailwindcss/oxide-wasm32-wasi/node_modules/@emnapi/wasi-threads']?.version);

// Verify no more blank versions
const bad = Object.entries(lock.packages)
  .filter(([k, v]) => k !== '' && (v.version === '' || v.version === undefined || v.version === null))
  .map(([k]) => k);
console.log('\nBlank versions remaining:', bad.length === 0 ? 'none' : bad);

fs.writeFileSync('package-lock.json', JSON.stringify(lock, null, 2) + '\n');
console.log('\nLock file updated successfully');
console.log('Total packages:', Object.keys(lock.packages).length);
