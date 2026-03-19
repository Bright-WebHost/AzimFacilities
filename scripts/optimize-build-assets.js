const fs = require('fs');
const path = require('path');

let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.error('sharp is required for image optimization. Run: npm install --save-dev sharp');
  process.exit(1);
}

const buildDir = path.join(__dirname, '..', 'build');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);
const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js', '.xml', '.json', '.txt']);

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

function normalizeToWebPath(filePath) {
  return filePath.split(path.sep).join('/');
}

async function convertImages(files) {
  const mapping = [];

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(extension)) {
      continue;
    }

    const webpFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    if (!fs.existsSync(webpFile)) {
      await sharp(file).webp({ quality: 82 }).toFile(webpFile);
    }

    const relativeOriginal = normalizeToWebPath(path.relative(buildDir, file));
    const relativeWebp = normalizeToWebPath(path.relative(buildDir, webpFile));
    mapping.push({ relativeOriginal, relativeWebp });
  }

  return mapping;
}

function replaceAssetReferences(files, mapping) {
  let updatedFiles = 0;

  for (const file of files) {
    const extension = path.extname(file).toLowerCase();
    if (!TEXT_EXTENSIONS.has(extension)) {
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const { relativeOriginal, relativeWebp } of mapping) {
      const escapedOriginal = relativeOriginal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const originalRegex = new RegExp(escapedOriginal, 'g');
      if (originalRegex.test(content)) {
        content = content.replace(originalRegex, relativeWebp);
        changed = true;
      }

      const slashOriginal = `/${relativeOriginal}`;
      const slashWebp = `/${relativeWebp}`;
      const escapedSlashOriginal = slashOriginal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const slashRegex = new RegExp(escapedSlashOriginal, 'g');
      if (slashRegex.test(content)) {
        content = content.replace(slashRegex, slashWebp);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

async function run() {
  if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found. Run the build first.');
    process.exit(1);
  }

  const allFiles = walkFiles(buildDir);
  const imageMapping = await convertImages(allFiles);
  const updatedFiles = replaceAssetReferences(allFiles, imageMapping);

  console.log(`Converted ${imageMapping.length} images to WebP.`);
  console.log(`Updated ${updatedFiles} text assets to reference WebP files.`);
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
