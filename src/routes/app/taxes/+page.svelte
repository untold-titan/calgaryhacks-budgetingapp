
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

<h3>
    - Using Canada Revenue Agency (CRA) Manditory infomration needed.  <a href="https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html">CRA Login</a>
    <br>- Using a thrid party to help like   <a href="https://turbotax.intuit.ca/tax/software/online?cid=pser_en_TT_2025_Google_Shopping_pMAX_EN_google_gkw_gen_NA_cg_assetgroup=%7Bassetgroup%7D_product_id=_zen_campaignid=19581176602&gad_source=1&gclid=EAIaIQobChMI8ISEiLrHiwMVA9DCBB0vJSSeEAAYASAAEgJOyvD_BwE&gclsrc=aw.ds">TurboTax</a>
    <br>- Or <a href= "https://www.wealthsimple.com/en-ca/tax?utm_term=wealthsimple%20tax&matchtype=e&campaign=21039355834&adgroup=159830487115&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfoW338AD-0zN0oyxCiSKCR5MLgnRhhbsUpP6-jhZ1-qhFckkTanBjBoCNLkQAvD_BwE">WealthSimple Tax</a>
    <br>- Depending on where you live you have to order then ship back
    <br> ordering is  <a href="https://apps.cra-arc.gc.ca/ebci/cjcf/fpos-scfp/pub/rdr?searchKey=2024+Package#formCatalog">Ordering T4/T1</a>
    <br> shiping your shipping your t4 is <a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information/where-mail-your-paper-t1-return.html">Sending T4/T1</a>
    
    <br> - T5 is when you make investments, banks/investment provider
</h3>
<script>    
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    
</script>

<style>
    .content {
        display: flex;
        text-align:center;
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