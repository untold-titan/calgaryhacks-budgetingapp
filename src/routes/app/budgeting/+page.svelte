<script>
  import { onMount } from "svelte";
  import Loading from "../../../components/Loading.svelte";
  import Gauge from "../../../components/Gauge.svelte";

  let loading = $state(false);

  onMount(() => {
    // TODO: LOAD DATA FROM DB
  });
</script>

{#if loading}
  <Loading />
{:else}
  <div>
    <div class="gauges">
        <Gauge topText="$20500" bottomText="Annual Income" percent=50 remaining="20500 out of 25000"/>
        <Gauge topText="$5250" bottomText="Monthly Expenses" percent=25 remaining=""/>
    </div>
    <div class="timeline">

    </div>
  </div>
{/if}

<style>
    .gauges{
        display: flex;
        width: 70%;
    }
</style>
