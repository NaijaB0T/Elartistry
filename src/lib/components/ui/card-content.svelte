<script>
  import { cn } from '$lib/utils';
  
  /**
   * @type {string}
   */
  export let class_ = undefined;
  
  let className = undefined;
  $: className = cn("p-6 pt-0", class_);
</script>

<div class={className} {...$$restProps}>
  <slot />
</div>