const { exec } = require('child_process');
const os = require('os');

// Determine the command to kill Node processes based on the OS
const killCommand = os.platform() === 'win32' 
  ? 'taskkill /F /IM node.exe /T'
  : 'pkill -f node';

console.log('Stopping all Node processes...');
exec(killCommand, (error) => {
  if (error) {
    console.log('No active Node processes found or unable to kill processes');
  } else {
    console.log('Successfully killed all Node processes');
  }

  console.log('Cleaning npm cache...');
  exec('npm cache clean --force', (error) => {
    if (error) {
      console.error('Error cleaning npm cache:', error);
    } else {
      console.log('Successfully cleaned npm cache');
    }

    console.log('Running cache busting script...');
    exec('node clear-cache.js', (error, stdout) => {
      if (error) {
        console.error('Error running cache busting script:', error);
      } else {
        console.log(stdout);
      }

      console.log('Starting development server...');
      const startCmd = os.platform() === 'win32'
        ? 'set NODE_OPTIONS=--openssl-legacy-provider && npm start'
        : 'NODE_OPTIONS=--openssl-legacy-provider npm start';
        
      const startServer = exec(startCmd);
      
      startServer.stdout.on('data', (data) => {
        console.log(data);
      });
      
      startServer.stderr.on('data', (data) => {
        console.error(data);
      });
    });
  });
}); 