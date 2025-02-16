<!-- Navigation sidebar -->
<script>
  import { goto } from "$app/navigation";
  import { user as userStore } from "$lib/stores";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  let { children } = $props();

  let user = $state(undefined);
  let navOpen = $state(false);
  let currentPage = $state("Home");
  userStore.subscribe((userData) => {
    user = userData;
  });

  onMount(() => {
    if (user == undefined) {
      goto("/login");
    }
  });
</script>

<div class="header" style="background-color: #202124;">
  <div class="hamburger">
    <button onclick={() => (navOpen = !navOpen)}>☰</button>
  </div>
  <h1>SoloSense</h1>
  <div class="user">
    <!-- {#if user != undefined}
      <p>{user.email}</p>
    {/if} -->
  </div>
</div>
{#if navOpen}
  <div class="acrylic bigboydiv" in:fade out:fade></div>
  <div class="nav-drawer" in:slide out:slide>
    <div class="header" style="padding-bottom: 40px;">
      <button onclick={() => (navOpen = !navOpen)}>X</button>
    </div>
    <a onclick={() => (navOpen = !navOpen)} href="/app">Dashboard</a>
    <a onclick={() => (navOpen = !navOpen)} href="/app/budgeting">Budgets</a>
    <a onclick={() => (navOpen = !navOpen)} href="/app/tasks">Tasks</a>
    <a onclick={() => (navOpen = !navOpen)} href="/app/taxes">Taxes</a>
  </div>
{/if}
<div class="content">
  {@render children()}
</div>

<style>
  a {
    display: block;
    font-size: 40px;
    text-decoration: none;
    color: #ffffff;
    padding: 5px;
  }
  .content {
    height: calc(100vh - 70px);
    background-color: #141416;
    color: #ffffff;
  }
  .bigboydiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }
  .nav-drawer {
    position: absolute;
    width: 275px;
    height: 100vh;
    text-align: center;
    top: 0;
    left: 0;
    background-color: #2d2f31;
    z-index: 11;
  }
  button {
    width: 40px;
    height: 40px;
    font-size: 32px;
    margin-left: 10px;
    border: 0;
    background: none;
    color: #ffffff;
  }
  h1 {
    margin: 0;
    margin-left: 20px;
  }
  .hamburger {
    padding-bottom: 10px;
  }
  .user {
    margin-left: auto;
    margin-right: 20px;
  }
  .header {
    display: flex;
    align-items: center;
    height: 70px;

    color: #ffffff;
  }
</style>
