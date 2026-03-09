const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtml = path.join(buildDir, 'index.html');

const pages = [
  'facilities-management',
  'cleaning-and-hospitality',
  'contact-us',
  'career',
  'sector',
  'hotel-hospital-sector',
  'government-sector',
  'real-estate-sector',
  'education-sector'
];

pages.forEach(page => {
  const pageDir = path.join(buildDir, page);
  const pageFile = path.join(pageDir, 'index.html');

  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
    console.log(`✅ Created folder: ${page}`);
  }

  if (!fs.existsSync(pageFile)) {
    fs.copyFileSync(indexHtml, pageFile);
    console.log(`✅ Copied index.html to: ${page}/index.html`);
  } else {
    console.log(`⏭️  Already exists: ${page}/index.html`);
  }
});

console.log('\n🎉 All pages fixed!');