<script>
  import Value from './Value.svelte';
  let { refs } = $props();
</script>

<style>
  ul {
    margin: 0;
  }
</style>

<ul>
  {#each refs as ref}
    <Value {ref}/>
  {/each}
</ul>
