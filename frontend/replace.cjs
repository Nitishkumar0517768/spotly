const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      // Replace $ followed by number
      content = content.replace(/\$([0-9])/g, '₹$1');
      
      // Replace $ followed by space and --
      content = content.replace(/\$\s*--/g, '₹ --');
      
      // Replace USD with INR
      content = content.replace(/USD/g, 'INR');
      
      // Replace Banknote and DollarSign with IndianRupee if we wanted to change icons, 
      // but let's just stick to the text symbols first unless the user specifically asked for icons.
      // The user said "change dollar into rupees", which implies currency symbol and word.
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

processDir('./src');
