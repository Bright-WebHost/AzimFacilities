const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'src', 'components');
const EXTRA_FILES = [
  path.join(ROOT, 'src', 'App.js'),
  path.join(ROOT, 'public', 'index.html'),
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(jsx|js|html)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function deriveAlt(tag) {
  if (/\balt\s*=/.test(tag)) return tag;

  let srcText = '';
  const srcMatch = tag.match(/\bsrc\s*=\s*{?([^>\s}]+|"[^"]+"|'[^']+')}?/);
  if (srcMatch) srcText = srcMatch[1] || '';

  const reqMatch = tag.match(/require\((['"])(.*?)\1\)/);
  if (reqMatch) srcText = reqMatch[2];

  const fileMatch = srcText.match(/([A-Za-z0-9_-]+)\.(webp|png|jpg|jpeg|gif|svg)/i);
  if (fileMatch) {
    const human = fileMatch[1]
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())
      .trim();
    if (human) {
      if (tag.includes('{')) return tag.replace('<img', `<img alt={${JSON.stringify(human)}}`);
      return tag.replace('<img', `<img alt="${human}"`);
    }
  }

  if (tag.includes('{')) return tag.replace('<img', '<img alt=""');
  return tag.replace('<img', '<img alt=""');
}

function addDimensions(tag) {
  const hasW = /\bwidth\s*=/.test(tag);
  const hasH = /\bheight\s*=/.test(tag);
  if (hasW && hasH) return tag;

  const lower = tag.toLowerCase();
  let w = 1200;
  let h = 800;

  if (/avatar|logo|icon/.test(lower)) {
    w = 120;
    h = 120;
  } else if (/client|thumb|thumbnail/.test(lower)) {
    w = 320;
    h = 240;
  }

  const isJsx = tag.includes('{') || /className=/.test(tag);
  if (!hasW) tag = tag.replace('<img', `<img width=${isJsx ? `{${w}}` : `"${w}"`}`);
  if (!hasH) tag = tag.replace('<img', `<img height=${isJsx ? `{${h}}` : `"${h}"`}`);
  return tag;
}

function addLazyLoading(tag, isHero) {
  if (/\bloading\s*=/.test(tag)) return tag;
  if (isHero) return tag;
  const isJsx = tag.includes('{') || /className=/.test(tag);
  return tag.replace('<img', `<img loading=${isJsx ? '"lazy"' : '"lazy"'}`);
}

function addFetchPriority(tag, isHero) {
  if (!isHero) return tag;
  if (/\bfetchpriority\s*=/.test(tag)) return tag;
  return tag.replace('<img', '<img fetchpriority="high"');
}

function fixButtons(content) {
  return content.replace(/<button\b([\s\S]*?)>([\s\S]*?)<\/button>/g, (full, attrs, inner) => {
    if (/\baria-label\s*=/.test(full)) return full;
    const textOnly = inner.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, '').trim();
    if (textOnly.length > 0) return full;
    return `<button aria-label="Interactive action"${attrs}>${inner}</button>`;
  });
}

function fixLinkText(content) {
  return content
    .replace(/>(\s*click here\s*)</gi, '>View our facilities management services<')
    .replace(/>(\s*read more\s*)</gi, '>Read about our facilities management services<')
    .replace(/>(\s*here\s*)</gi, '>Learn more about this service<');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  let imgIndex = 0;
  content = content.replace(/<img\b[\s\S]*?>/g, (tag) => {
    const isHero =
      /Home7\.jsx$/i.test(filePath) && imgIndex === 0 ||
      /Slider4\.jsx$/i.test(filePath) && /66\.webp|AzimRamadan\.jpeg|azim-ramadan-m\.png/i.test(tag);

    let next = tag;
    next = deriveAlt(next);
    next = addDimensions(next);
    next = addLazyLoading(next, isHero);
    next = addFetchPriority(next, isHero);
    imgIndex += 1;
    return next;
  });

  content = fixButtons(content);
  content = fixLinkText(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function ensureHeroPreload() {
  const htmlPath = path.join(ROOT, 'public', 'index.html');
  if (!fs.existsSync(htmlPath)) return false;
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (html.includes('rel="preload"') && html.includes('AzimRamadan.jpeg')) return false;

  const preload = '    <link rel="preload" as="image" href="/assets/media/AzimRamadan.jpeg" fetchpriority="high" />\n';
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${preload}</head>`);
    fs.writeFileSync(htmlPath, html, 'utf8');
    return true;
  }
  return false;
}

const files = [...walk(SRC_DIR), ...EXTRA_FILES.filter(f => fs.existsSync(f))];
let changed = 0;
for (const file of files) {
  if (processFile(file)) changed += 1;
}
if (ensureHeroPreload()) changed += 1;

console.log(`Processed ${files.length} files. Changed ${changed} files.`);
