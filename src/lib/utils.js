import { browser } from '$app/environment';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS using clsx and tailwind-merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to standard format
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Create observer for element animations
 */
export function createIntersectionObserver(callback, options = {}) {
  if (!browser) return { observe: () => {}, unobserve: () => {} };
  
  const defaultOptions = {
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      callback(entry);
    });
  }, defaultOptions);
  
  return observer;
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId, offset = 0) {
  if (!browser) return;
  
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/**
 * Preload images for smoother transitions
 */
export function preloadImages(imagePaths, basePath = '/images/') {
  if (!browser) return Promise.resolve();
  
  const promises = imagePaths.map(path => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `${basePath}${path}`;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
  
  return Promise.all(promises);
}

/**
 * Shuffle array (for randomizing images)
 */
export function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Get viewport dimensions
 */
export function getViewportDimensions() {
  if (!browser) return { width: 0, height: 0 };
  
  return {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  };
}