<script>
  const {expenses} = $props();
</script>

<div class="cont">
  <div class="core">
    <img src="/timelinecore.png" />
  </div>
  <div class="nodes">
    {#each expenses as expense,i}
      <div class={"node " + (i % 2 ? "flip" : "")}>
        <div class="nodetext">
          <h1>{expense.name} - ${expense.amount}</h1>
        </div>
        <div class="datestr">
          <h1>{expense.date.toDateString()}</h1>
        </div>
        <img src="/timelinemark.png" />
      </div>
    {/each}
    <div style="height: 100px;"></div>
  </div>
</div>

<style>
  .flip {
    margin-left: auto;
  }
  .flip img {
    transform: scaleX(-1);
  }
  .flip .nodetext {
    left: 40px;
  }
  .flip .datestr{
    left: 63px;
  }
  .core {
    position: relative;
    top: 0;
  }
  .core img {
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  .nodes {
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100vh - 70px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .node {
    width: 54%;
    margin-top: 25px;
  }
  .nodetext {
    position: relative;
    top: 93px;
    margin-left: 20px;
  }
  .node img {
    width: 100%;
  }
  .cont {
    position: relative;
    width: 100%;
    max-width: 700px;
    height: calc(100vh - 70px);
    overflow-y: hidden;
    border-left: 1px solid white;
  }
  .datestr{
    position: relative;
    top: 125px;
    left: 20px;
  }

  h1 {
    margin: 0;
  }
</style>
