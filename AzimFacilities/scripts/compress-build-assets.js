const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const buildDir = path.join(__dirname, '..', 'build');
const COMPRESSIBLE_EXTENSIONS = new Set([
  '.html',
  '.css',
  '.js',
  '.json',
  '.xml',
  '.txt',
  '.svg',
  '.map'
]);

function walkFiles(dir, collector = []) {
  if (!fs.existsSync(dir)) {
    return collector;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, collector);
    } else {
      collector.push(fullPath);
    }
  }

  return collector;
}

function compressFile(filePath) {
  const content = fs.readFileSync(filePath);

  const gzipBuffer = zlib.gzipSync(content, { level: zlib.constants.Z_BEST_COMPRESSION });
  fs.writeFileSync(`${filePath}.gz`, gzipBuffer);

  const brotliBuffer = zlib.brotliCompressSync(content, {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11
    }
  });
  fs.writeFileSync(`${filePath}.br`, brotliBuffer);
}

function run() {
  if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found. Run the build first.');
    process.exit(1);
  }

  const files = walkFiles(buildDir);
  let compressedCount = 0;

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (!COMPRESSIBLE_EXTENSIONS.has(extension)) {
      continue;
    }

    compressFile(file);
    compressedCount += 1;
  }

  console.log(`Generated gzip and brotli files for ${compressedCount} assets.`);
}

run();
