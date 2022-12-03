<script>
  import { onDestroy } from "svelte";
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
  import { cart } from "../store/cart";

  var count = 0;

  const unsubscribe = cart.subscribe((p) => {
    count = p.length;
  });

  onDestroy(unsubscribe);
</script>

<Navbar {count} />

<slot />
