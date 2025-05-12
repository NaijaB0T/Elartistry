<script>
  import { cn } from '$lib/utils';
  import { theme } from '$lib/stores/theme';
  
  /**
   * @type {"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"}
   */
  export let variant = "default";
  
  /**
   * @type {"default" | "sm" | "lg" | "icon"}
   */
  export let size = "default";
  
  /**
   * @type {string}
   */
  export let class_ = undefined;
  
  /**
   * @type {boolean}
   */
  export let disabled = false;
  
  let className = undefined;
  $: className = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    {
      "bg-primary text-white hover:bg-primary/90": variant === "default",
      "bg-destructive text-destructive-foreground hover:bg-destructive/90": variant === "destructive",
      "border border-accent bg-transparent hover:bg-accent text-accent hover:text-white dark:text-white": variant === "outline",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      "hover:bg-accent/20 hover:text-accent": variant === "ghost",
      "underline-offset-4 hover:underline text-primary": variant === "link",
      "h-10 py-2 px-4": size === "default",
      "h-9 px-3 rounded-md": size === "sm",
      "h-11 px-8 rounded-md": size === "lg",
      "h-10 w-10": size === "icon",
    },
    class_
  );
</script>

<button
  class={className}
  disabled={disabled}
  {...$$restProps}
  on:click
  on:keydown
>
  <slot />
</button>