<script>
  import { onMount } from "svelte";

  let data = $props();
  let animate = $state(true);

  onMount(() => {
    console.log(data.percent);
    setTimeout(
      () => {
        if (data.percent != undefined) {
          animate = false;
        }
      },
      data.percent * 10 - 125
    );
  });
</script>

<div class="container" title={data.remaining}>
  <img src="/outlinecorcle.png" class="outline" width="250" height="250" />
  <img
    class="under"
    width="250"
    height="250"
    style={"animation-play-state:" +
      (animate == true ? "running" : "paused") +
      ";"}
  />
  <div class="gauge"></div>
  <div class="text">
    {data.topText ?? "top text"}
    <br />
    <br />
    {data.bottomText ?? "bottom text"}
  </div>
</div>

<style>
  .container {
    width: 250px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  .gauge {
    position: relative;
    background-color: #141416;
    width: 150px;
    height: 150px;
    rotate: 45deg;
    top: 150px;
    left: 50px;
  }
  .outline {
    position: absolute;
    display: block;

    width: 250px;
    height: 250px;
    rotate: 312.7deg;
    z-index: auto;
  }
  .under {
    position: absolute;
    display: block;
    width: 250px;
    height: 250px;
    rotate: 135deg;
    z-index: auto;
    filter: invert(82%) sepia(91%) saturate(1864%) hue-rotate(207deg)
      brightness(99%) contrast(91%);
    animation-name: coolanimationbecauseimjustthatgood;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    content: url("/corclequarter.png");
  }
  .text {
    position: relative;
    width: 100px;
    height: 100px;
    left: 50px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    top: -50px;
  }
  img {
    width: 250px;
    height: 250px;
  }
  @keyframes coolanimationbecauseimjustthatgood {
    0% {
      rotate: 135deg;
      content: url("/corclequarter.png");
    }
    25% {
      rotate: 225deg;
    }
    50% {
      content: url("/corclehalf.png");
    }
    50% {
      rotate: 315deg;
    }
    51% {
      content: url("/corcle.png");
    }
    75% {
      rotate: 405deg;
    }
    100% {
      rotate: 405deg;
      content: url("/fullcorcle.png");
    }
  }
</style>
