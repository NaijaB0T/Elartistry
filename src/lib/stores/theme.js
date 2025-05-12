import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize with dark theme by default, but check localStorage if browser is available
const storedTheme = browser ? localStorage.getItem('theme') || 'dark' : 'dark';

// Create a writable store with the initial theme value
export const theme = writable(storedTheme);

// Subscribe to theme changes to update localStorage and document attributes
if (browser) {
  theme.subscribe(value => {
    localStorage.setItem('theme', value);
    
    // Update the document's data-theme attribute
    document.documentElement.setAttribute('data-theme', value);
    
    // Also add/remove the 'dark' class for Tailwind Dark Mode
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }

    // Apply a body class for easier targeting
    document.body.className = value === 'dark' ? 'theme-dark' : 'theme-light';
  });
}

// Function to toggle between dark and light mode
export function toggleTheme() {
  theme.update(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
}