// Script to clean cache and restart the development server
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Get the current timestamp to ensure cache busting
const timestamp = new Date().getTime();

// Update timestamps in index.html for cache busting
console.log('Updating timestamp values for cache busting...');

// Clear node_modules cache
try {
  console.log('Clearing React build cache...');
  if (fs.existsSync(path.join(__dirname, 'node_modules', '.cache'))) {
    execSync('rimraf node_modules/.cache', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('Error clearing cache:', error);
}

// Clear build directory
try {
  console.log('Clearing build directory...');
  if (fs.existsSync(path.join(__dirname, 'build'))) {
    execSync('rimraf build', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('Error clearing build directory:', error);
}

// Apply new timestamp to CSS files in critical-styles.css
try {
  console.log('Updating CSS timestamp...');
  const cssPath = path.join(__dirname, 'public', 'assets', 'css', 'critical-styles.css');
  if (fs.existsSync(cssPath)) {
    let cssContent = fs.readFileSync(cssPath, 'utf8');
    cssContent = `/* Last updated: ${new Date().toISOString()} */\n` + cssContent;
    fs.writeFileSync(cssPath, cssContent);
  }
} catch (error) {
  console.error('Error updating CSS timestamp:', error);
}

// Stop any running React development servers
try {
  console.log('Stopping any running development servers...');
  if (os.platform() === 'win32') {
    execSync('taskkill /f /im node.exe', { stdio: 'ignore' });
  } else {
    execSync('killall node', { stdio: 'ignore' });
  }
} catch (error) {
  // It's okay if this fails - it just means no servers were running
}

// Start the development server
console.log('Starting development server with clean cache...');
try {
  // Different commands based on detected package manager
  if (fs.existsSync(path.join(__dirname, 'yarn.lock'))) {
    execSync('yarn start', { stdio: 'inherit' });
  } else {
    execSync('npm start', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('Error starting development server:', error);
} 