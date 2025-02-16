
<div class="top-bar"></div>

<img class="logo-img" src="/Testlogo.png" style="display: flex;">
<img class="project-img" src="/projectPicture.png" style="display: flex;">

<script>
    import Navigation from "../components/Navigation.svelte";
    import "../styles/styles.css"
</script>

<div style="position: absolute; top: 0; right: 140px; font-size: 30px;">
  <Navigation />
</div>

<br><br><br><br><br>

<div class="slogan">
  <h1 style="font-size: 40px;">Own Your Life. From Tasks to Taxes.</h1>
</div>

<div class="container">

  <section class="half-section">
    <h1>Budgets</h1>
    <p>Input your income, and we’ll instantly create a custom budget framework for you.</p>
    <p>Break down spending into categories like food, rent, ect, for clearer insights</p>
    <p>Stay on top of monthly obligations with notifications before due dates.</p>
  </section>

  <section class="half-section">
    <h1>Taxes</h1>
    <p>Step-by-step walkthrough on how to file your taxes without confusion or stress</p>
    <p>Provides direct links to government tax authority websites</p>
    <p>Simplifies the process so it's not overwhelming</p>
  </section>
</div>

<br><br><br><br><br><br>

<style>
  .logo-img {
    position: absolute;
    top: 0;
    margin-left: 20px;
    margin-right: 20px;
    width: 10vw;
    z-index: 10;
  }

  .top-bar {
    width: 100%;
    height: 90px;
    background-color: #202124;
    z-index: -1;
  }
  .slogan {
    text-align:center;
   }

  .container {
    display: flex;
    height: 40vh;
    margin: 0;
  }

  .half-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .project-img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    width: 92vw;
  }
</style>