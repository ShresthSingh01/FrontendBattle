const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'src/components/sections');

fs.readdirSync(sectionsDir).forEach(file => {
  if (file === 'Hero.jsx') return; // Skip hero since it has its own WAAPI sequence

  const filePath = path.join(sectionsDir, file);
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <section with <section data-reveal
    content = content.replace(/<section\s+(?!.*?data-reveal)/g, '<section data-reveal ');
    
    fs.writeFileSync(filePath, content);
  }
});

// Also add it to Footer
const footerPath = path.join(__dirname, 'src/components/layout/Footer.jsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/<footer\s+(?!.*?data-reveal)/g, '<footer data-reveal ');
fs.writeFileSync(footerPath, footerContent);
