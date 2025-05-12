<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  
  export let enabled = true;
  
  let cursor;
  let cursorDot;
  let position = { x: 0, y: 0 };
  let visible = false;
  let hover = false;
  
  onMount(() => {
    if (!browser || !enabled) return;
    
    // Create camera cursor
    cursor = document.createElement('div');
    cursor.classList.add('camera-cursor');
    document.body.appendChild(cursor);

    // Create small dot cursor
    cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);
    
    // Don't hide default cursor anymore
    // document.documentElement.style.cursor = 'none';
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      position.x = e.clientX;
      position.y = e.clientY;
      
      cursor.style.transform = `translate(${position.x}px, ${position.y}px)`;
      cursorDot.style.transform = `translate(${position.x}px, ${position.y}px)`;
      
      if (!visible) {
        visible = true;
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';
      }
    };
    
    // Track mouse enter/leave
    const handleMouseLeave = () => {
      visible = false;
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };
    
    const handleMouseEnter = () => {
      visible = true;
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };
    
    // Track hover elements
    const handleElementHover = () => {
      hover = true;
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    };
    
    const handleElementLeave = () => {
      hover = false;
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementHover);
      el.addEventListener('mouseleave', handleElementLeave);
      // Don't hide the default cursor anymore
      // el.style.cursor = 'none';
    });
    
    // Clean up
    return () => {
      if (cursor && cursor.parentNode) {
        document.body.removeChild(cursor);
      }
      
      if (cursorDot && cursorDot.parentNode) {
        document.body.removeChild(cursorDot);
      }
      
      // document.documentElement.style.cursor = '';
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
        // el.style.cursor = '';
      });
    };
  });
</script>

<style>
  :global(.camera-cursor) {
    position: fixed;
    width: 36px;
    height: 28px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.75;
    transition: width 0.3s, height 0.3s, opacity 0.3s, transform 0.1s;
    margin-left: -18px;
    margin-top: -14px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='28' height='28' stroke='%23D4AF37' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='3'%3E%3C/circle%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    will-change: transform;
  }

  :global(.cursor-dot) {
    position: fixed;
    width: 6px;
    height: 6px;
    background-color: #D4AF37;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.9;
    transform: translate(-50%, -50%);
    margin-left: 0;
    margin-top: 0;
    will-change: transform;
    transition: transform 0.1s, width 0.3s, height 0.3s, opacity 0.3s;
  }

  :global(.camera-cursor.hover) {
    transform: scale(1.5);
    opacity: 1;
  }

  :global(.cursor-dot.hover) {
    width: 0;
    height: 0;
    opacity: 0;
  }
</style>