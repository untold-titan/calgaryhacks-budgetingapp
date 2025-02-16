<script>
    import { goto } from "$app/navigation";
    import Navigation from "../../components/Navigation.svelte";
    import "../../styles/styles.css";
    import EmailPassword from "../../onboaring-components/EmailPassword.svelte";
    import AnnualIncome from "../../onboaring-components/AnnualIncome.svelte";
    import Location from "../../onboaring-components/Location.svelte";
    import Expenses from "../../onboaring-components/Expenses.svelte";
  
    const components = [EmailPassword, AnnualIncome, Location, Expenses];
    let userResponse = []
    let step = 0; 
  
    function nextStep() {
      if (step < components.length - 1) {
        step++;
      }
    }
  
    function prevStep() {
      if (step > 0) {
        step--;
      }
    }
  </script>
  
  <Navigation/>
  
  <h1 class="title">Signup Page</h1>
  
  <div class="signup">
    <form>
      <!-- Dynamically display the current component -->
      <svelte:component this={components[step]} />
        
      <br/><br/>
      
      <!-- Navigation buttons -->
      {#if step > 0}
        <button class="button" on:click|preventDefault={prevStep}>Back</button>
      {/if}
      
      {#if step < components.length - 1}
        <button class="button" on:click|preventDefault={nextStep}>Next</button>
      {:else}
        <button class="button" on:click|preventDefault={CreateNewUser}>Sign up</button>
      {/if}
    </form>
  </div>
  