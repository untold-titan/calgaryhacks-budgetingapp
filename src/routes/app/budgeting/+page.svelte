<script>
  import { onMount } from "svelte";
  import Loading from "../../../components/Loading.svelte";
  import Gauge from "../../../components/Gauge.svelte";

</script>

<Gauge/>
<Loading />

<style>
  .chart {
    width: 500px;
    height: 500px;
  }
</style>
