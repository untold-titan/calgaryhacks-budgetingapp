
<!-- padding-left: 105px;
        padding-right: 105px; -->
<div style="display: flex; justify-content: space-between;padding-left: 40px; padding-right: 40px; padding-top: 15px">
    <a href="#infoNeeded"style="color:grey">Information Needed</a>
    <a href="#FilTaxOn"style="color:grey">Filing Taxes Online</a>
    <a href="#AuthRepre"style="color:grey">Authorizing a representative</a>
    <a href="#Shipping"style="color:grey">Shipping</a>
</div>  

<div class="introduction">
    <div>
        <h1><br><br><br>Introduction</h1>
        <h3>This is a walk through for filing your taxes</h3>
        <h3>Use the links above to jump to certain sections of the process</h3>
        <h3>There are a few mandatory pieces of information needed before starting such as a CRA account and a T4 form</h3>
        <h3>You get the T4 from your employer either physically or digitally</h3>
        <h3>It's a list of how much you owe in taxes and where the money goes</h3>
        <a name="infoNeeded" id="infoNeeded"></a>
        <h3>Use the links provided as you go through to your advantage as they are safe and very helpful</h3>
        <br><br><br><br><br>
        <br><br><br><br>
    </div>
    <div>
    
        <img src="/t4.jpg" alt="T4" class="T4-img">
        <h4>
            <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/completing-filing-information-returns/t4-information-employers/t4-slip.html" target="blank">Blank T4 Form</a>
        </h4>
    </div>
</div>

<div class="infoNeeded">
    <h1>Information Needed Before Starting</h1>

    <h3>
        <br>Canada Revenue Agency (CRA) account is needed.  <a href="https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html" target="blank">CRA Login</a>
    </h3>
    <a name="FilTaxOn" id="FilTaxOn"></a>
    <h3>T4 form ensuring all personal information is correct. If not, call the CRA at 1-(800)-959-8281</h3>
    <h3>If you have investments, a T5 is mandatory for tax returns. <br>You can acecss them on the banks app under Documents or by calling them</h3>
    <h3>
        If you have any <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses.html" target="blank">tax deductions</a>, have the receipts or proof of purchase.
    </h3>
    
    <br><br><br><br><br>
    <h1>Filing Taxes Online</h1>
    <h3>To file your taxes online, there's a hanful of options out there that can help you</h3>
    <h3>
        Two of the best user friendly companies are <a href="https://turbotax.intuit.ca/tax/software/online?cid=pser_en_TT_2025_Google_Shopping_pMAX_EN_google_gkw_gen_NA_cg_assetgroup=%7Bassetgroup%7D_product_id=_zen_campaignid=19581176602&gad_source=1&gclid=EAIaIQobChMI8ISEiLrHiwMVA9DCBB0vJSSeEAAYASAAEgJOyvD_BwE&gclsrc=aw.ds" target="blank">TurboTax</a> or <a href= "https://www.wealthsimple.com/en-ca/tax?utm_term=wealthsimple%20tax&matchtype=e&campaign=21039355834&adgroup=159830487115&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfoW338AD-0zN0oyxCiSKCR5MLgnRhhbsUpP6-jhZ1-qhFckkTanBjBoCNLkQAvD_BwE" target="blank">WealthSimple Tax</a>
    </h3>
    <h3>They both have a free option where you do it yorself or a paid option where an expert does it for you</h3>
    <h3>They also both are very user friendly and walk you through the stressful process of filing taxes</h3>

    <br><br><br><br><br>
    <a name="AuthRepre" id="AuthRepre"></a>
    <h1>Authorize a Representative</h1>
    <h3>You can authorize a person to be able to file taxes on your behalf</h3>
    <h3>You will need to give them all the <a href="#infoNeeded" style="color:gray">information needed</a></h3>
    <h3>You can limit the authorized persons access by allowing them to <br> make certain changes, and if its for personal or business use</h3>
    <h3>This <a href="https://www.canada.ca/en/revenue-agency/services/tax/representative-authorization/how.html" target="blank">link</a> gives you the fastest ways to give authorize a representative</h3>

    <br><br><br><br><br>

    
    <a name="Shipping" id="Shipping"></a>
    <h1>Filing by Mail/Paper</h1>
    <a name="Shipping" id="Shipping"></a>
    <h3>If you like pen and paper, you can print the documents and mail them do designated locations</h3>
    <h3>You can order a <a href="https://apps.cra-arc.gc.ca/ebci/cjcf/fpos-scfp/pub/rdr?searchKey=2024+Package#formCatalog" target="blank">T1 tax package</a> (same as T4) to your house, fill it out, then mail it to a <a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information/where-mail-your-paper-t1-return.html" target="blank">designated location </a> </h3>
    <h3>You can also print out your <a href="https://www.canada.ca/en/revenue-agency/services/forms-publications/tax-packages-years/general-income-tax-benefit-package.html" target="blank"> federal and provinvial tax return</a> and file it online or by mail to your <a href="https://www.canada.ca/en/revenue-agency/corporate/contact-information/where-mail-your-paper-t1-return.html" target="blank">designated location </a> </h3>
</div>

<br><br><br><br><br><br><br>

<script>
    import { online } from 'svelte/reactivity/window';

    
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<style>
    .introduction {
        display: flex;
        text-align:center;
    }

    .infoNeeded {
        text-align:center;
    }
   
    .T4-img {
      width: 59.5vw;
      padding: 5px;
      height: auto;         
      bottom: 35px;
      right: 10px;  
      object-fit: cover;   
      margin-top: 25px;
    }
     
    
</style>