// This script ensures consistency of styling and fixes any issues that might arise
document.addEventListener('DOMContentLoaded', function() {
    // Force CSS to apply properly
    function enforceStyles() {
        // Check if any critical elements are not styled correctly
        const boxIcons = document.querySelectorAll('.box-icon');
        
        if (boxIcons.length === 0) {
            // If elements aren't found yet, try again in 100ms
            setTimeout(enforceStyles, 100);
            return;
        }
        
        // Fix any box icons that didn't get styled properly
        boxIcons.forEach(function(icon) {
            // Ensure hexagonal shapes are removed
            if (getComputedStyle(icon).clipPath !== 'none') {
                icon.style.clipPath = 'none';
                icon.style.transform = 'none';
                icon.style.background = '#0D3380';
                icon.style.borderRadius = '50%';
            }
            
            // Center the icon within the circle if needed
            const iconElement = icon.querySelector('i');
            if (iconElement && getComputedStyle(iconElement).margin !== '0px auto') {
                iconElement.style.margin = '0 auto';
                iconElement.style.marginTop = '0';
            }
        });

        // Make sure search and menu icons have proper size and alignment
        const searchIcons = document.querySelectorAll('.nav-search i');
        searchIcons.forEach(function(icon) {
            if (getComputedStyle(icon).color !== 'rgb(255, 255, 255)') {
                icon.style.color = '#ffffff';
            }
            if (getComputedStyle(icon).fontSize !== '22px') {
                icon.style.fontSize = '22px';
            }
        });
        
        const menuIcons = document.querySelectorAll('.menu-toggle i');
        menuIcons.forEach(function(icon) {
            if (getComputedStyle(icon).color !== 'rgb(255, 255, 255)') {
                icon.style.color = '#ffffff';
            }
            if (getComputedStyle(icon).fontSize !== '20px') {
                icon.style.fontSize = '20px';
            }
        });
        
        // Ensure dropdown behavior works correctly
        const dropdowns = document.querySelectorAll('.nav-item.dropdown');
        dropdowns.forEach(function(dropdown) {
            // Make sure the dropdown is visible on hover
            const horizontalDropdown = dropdown.querySelector('.horizontal-dropdown');
            if (horizontalDropdown) {
                dropdown.addEventListener('mouseenter', function() {
                    horizontalDropdown.style.opacity = '1';
                    horizontalDropdown.style.transform = 'scaleY(1)';
                    horizontalDropdown.style.visibility = 'visible';
                });
                
                dropdown.addEventListener('mouseleave', function() {
                    horizontalDropdown.style.opacity = '0';
                    horizontalDropdown.style.transform = 'scaleY(0)';
                    horizontalDropdown.style.visibility = 'hidden';
                });
            }
        });

        console.log('Style enforcement completed');
    }
    
    // Try enforcing styles immediately
    enforceStyles();
    
    // Also try again when window is fully loaded (as a fallback)
    window.addEventListener('load', enforceStyles);
    
    // And once more after a slight delay to catch any dynamic changes
    setTimeout(enforceStyles, 1000);
}); 