<script>
  import { cn } from '$lib/utils';
  
  /**
   * @type {string}
   */
  export let class_ = undefined;
  
  let className = undefined;
  $: className = cn("rounded-lg border bg-card text-card-foreground shadow-sm", class_);
</script>

<div class={className} {...$$restProps}>
  <slot />
</div>