<script>
</script>

<div class="cont">
  <div class="core">
    <img src="/timelinecore.png" />
  </div>
  <div class="nodes">
    <div class="node">
      <div class="nodetext">
        <h1>Rent</h1>
      </div>
      <img src="/timelinemark.png" />
    </div>
    <div class="node flip">
      <div class="nodetext">
        <h1>Groceries</h1>
      </div>
      <img src="/timelinemark.png" />
    </div>
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
    right: -40%;
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
    top: 50px;
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

  h1 {
    margin: 0;
  }
</style>
