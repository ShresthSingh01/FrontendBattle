const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-oceanic-noir');
    content = content.replace(/bg-\[#111111\]/g, 'bg-nocturnal-exp');
    content = content.replace(/bg-\[#f0f0ee\]/g, 'bg-arctic-powder');
    content = content.replace(/text-\[#111111\]/g, 'text-oceanic-noir');
    
    content = content.replace(/bg-black/g, 'bg-oceanic-noir');
    content = content.replace(/text-black/g, 'text-oceanic-noir');
    content = content.replace(/background: '#0a0a0a'/g, "backgroundColor: 'var(--oceanic-noir)'");
    content = content.replace(/background: '#111111'/g, "backgroundColor: 'var(--nocturnal-exp)'");
    
    fs.writeFileSync(filePath, content);
  }
});
