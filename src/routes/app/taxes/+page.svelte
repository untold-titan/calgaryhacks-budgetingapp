
<img src="/t4.jpg" alt="T4" class="T4-img">

<h1><br><br>1. Locate your T4</h1>
<br>
<h3>You get this from your employer either physically or digitally</h3>
<h3>It's a list of how much you owe in taxes and where the money goes</h3>
<h3>What is your income listed on number 14, Employment Income?</h3>
<h3>
<label for="Income">Enter a money value: $</label>
<input type="number" id="Income" placeholder="e.g. 1234.56" style="width: 90px; margin-left: 10px"/>
</h3>
<script>    
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    
</script>

<style>
    h1 {
        margin: 0;
        margin-left: 110px;
    }
    h3 {
        margin: 1;
        margin-left: 10px;
    }
    .T4-img {
      width: 59.5vw;
      height: auto;         
      position: fixed;      
      bottom: 35px;
      right: 10px;
      object-fit: cover;  
    }
</style>