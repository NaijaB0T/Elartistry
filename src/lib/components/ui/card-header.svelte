<script>
  import { cn } from '$lib/utils';
  
  /**
   * @type {string}
   */
  export let class_ = undefined;
  
  let className = undefined;
  $: className = cn("flex flex-col space-y-1.5 p-6", class_);
</script>

<div class={className} {...$$restProps}>
  <slot />
</div>