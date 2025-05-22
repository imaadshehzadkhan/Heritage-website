const fs = require('fs');
const path = require('path');

// Generate a timestamp for cache busting with an additional random value for better cache busting
const timestamp = Date.now() + Math.floor(Math.random() * 10000000);

// Path to the public/index.html file
const indexHtmlPath = path.join(__dirname, 'public', 'index.html');

try {
  // Read the index.html file
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  
  // Add a version query parameter to CSS and JS files
  indexHtml = indexHtml.replace(/(href=["'].*?\.css)(["'])/g, `$1?v=${timestamp}$2`);
  indexHtml = indexHtml.replace(/(src=["'].*?\.js)(["'])/g, `$1?v=${timestamp}$2`);
  
  // Write the updated index.html file
  fs.writeFileSync(indexHtmlPath, indexHtml);
  
  console.log('Cache busting parameters added to resource URLs in index.html');
} catch (error) {
  console.error('Error updating index.html:', error);
} 