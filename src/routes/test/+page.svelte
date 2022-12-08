<script lang="ts">
  import Component from './component.svelte';

  function handleMessage(event: any) {
    alert(event.detail.text);
  }
</script>

<Component on:message={handleMessage} />
