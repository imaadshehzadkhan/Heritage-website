// This script ensures CSS files are forcibly refreshed when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Function to add a unique timestamp to CSS URLs to force refresh
    function refreshCSS() {
        const timestamp = new Date().getTime();
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
        
        cssLinks.forEach(function(link) {
            // Get the current href
            let href = link.getAttribute('href');
            
            // Remove any existing cache-busting query params
            href = href.replace(/\?v=\d+$/, '');
            
            // Add a new timestamp
            link.setAttribute('href', href + '?v=' + timestamp);
        });
        
        console.log('CSS files refreshed with timestamp: ' + timestamp);
    }
    
    // Run the refresh function
    refreshCSS();
}); 