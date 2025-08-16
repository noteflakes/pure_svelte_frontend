<script>
  let { ref } = $props();
  import { states } from './states.svelte.js';
</script>

<li>{ref}: {states[ref]}</li>
