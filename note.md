<!-- https://svelte.dev/examples/hello-world -->


{#if data.products.length === 0}
      <h1>{data.products.length}</h1>
    {:else}
      <h1>No products</h1>
    {/if}



<script lang="ts" context="module">
  export let count = 10;
</script>
<script lang="ts">
  let number = count;
</script>
<h1>Count: {count}</h1>
<h1>Count: {number}</h1>
<button on:click={() => (count = count + 1)}>Click</button>
<br />
<button on:click={() => (number = number + 1)}>Click Number</button>


<script lang="ts">
  export let count = 10;
  $: if (count > 12) {
    console.log(count);
  }
</script>

<h1>Count: {count}</h1>
<button on:click={() => (count = count + 1)}>Click</button>


let name = "";

  function handleSubmit() {
    alert(`hy ${name}`);
  }

<form
  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  on:submit|preventDefault={handleSubmit}
>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username"
      bind:value={name}
    />
  </div>
  <p>{name}</p>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
</form>





<script lang="ts">
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

  beforeUpdate(() => {
    console.log("the component is about to update");
  });

  onMount(() => {
    console.log("the component has mounted");
  });

  afterUpdate(() => {
    console.log("the component just updated");
  });

  onDestroy(() => {
    console.log("the component is being destroyed");
  });
</script>




<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0.55)}> 25% </button>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>



<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		Flies in, fades out
	</p>
{/if}




<script lang="ts">
  import Component from "./component.svelte";

  function handleMessage(event: any) {
    alert(event.detail.text);
  }
</script>

<Component on:message={handleMessage} />

<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch("message", {
      text: "Hello!",
    });
  }
</script>

<button on:click={sayHello}> Click to say hello </button>




