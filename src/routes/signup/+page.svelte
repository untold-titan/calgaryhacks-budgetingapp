<script>
  import { goto } from "$app/navigation";
  import { user as userStore } from "$lib/stores";
  import { getAuth } from "@firebase/auth";
  import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore"
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import Navigation from "../../components/Navigation.svelte";
  import Expenses from "../../onboaring-components/Expenses.svelte";
  import Loading from "../../components/Loading.svelte";
  import "../../styles/styles.css";
  const auth = getAuth();
  const db = getFirestore();

    let user = $state();
    userStore.subscribe(usr => {
        user = usr;
    })


  let income = $state(0);
  let expenses = $state([{ name: "", amount: "", date: "" }]);
  let email = $state("");
  let password = $state("");
  let error = $state("");
  let userResponse = [];
  let step = $state(0);
  let loading = $state();

  function nextStep() {
    if (step == 0 && email == "" && password == "") {
      error = "Please enter an email and password!!";
      return;
    }

    if (step == 0) {
      loading = true;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          userStore.set(result.user);
          loading = false;
          step++;
          error = "";
        })
        .catch((err) => {
          console.log(err);
          loading = false;
          error = err;
        });
      return;
    }

    if (step < 3) {
      step++;
    }
  }

  function prevStep() {
    if (step > 1) {
      step--;
    }
  }

  async function PostDBData() {
    loading = true;

    expenses.forEach(async expense =>  {        
        await addDoc(collection(db, "expenses"),{
            name:expense.name,
            amount:expense.amount,
            repeatDate:expense.date,
            userId:user.uid
        })
    })

    await setDoc(doc(db, "budgets",user.uid),{
        income:income
    })

    // Just making sure things save properly :)
    setTimeout(() => {
        goto("/app/budgeting")
    },1000)
  }
</script>

<div class="header">
  <h1>SoloSense</h1>
  <Navigation />
</div>

<div class="signup">
  <h1>Signup</h1>
  {#if step == 0}
    <!-- <label>Email</label><br /> -->
    <input type="email" bind:value={email} placeholder="Email" /><br /><br />
    <!-- <label>Password</label><br /> -->
    <input type="password" bind:value={password} placeholder="Password" /><br
    /><br />
  {:else if step == 1}
    <label>Annual Income</label><br />
    <input type="number" bind:value={income} placeholder="Annual Income" />
  {:else if step == 2}
    <Expenses {expenses} />
  {/if}

  <!-- Navigation buttons -->
  <div style="padding-bottom: 16px; padding-top:16px">
    {#if step > 0}
      <button class="button" onclick={prevStep}>Back</button>
    {/if}

    {#if step < 2}
      <button class="button" onclick={nextStep}>Next</button>
    {:else if step}
      <button class="button" onclick={PostDBData}>Sign up</button>
    {/if}
  </div>

  {#if error != ""}
    <p style="color: red;">{error}</p>
  {/if}

  {#if loading}
    <Loading />
  {/if}
</div>

<style>
  .header {
    padding-left: 20px;
    display: flex;
    align-items: center;
    height: 70px;
    color: #ffffff;
    background-color: #202124;
  }
  .header h1 {
    margin-right: auto;
  }
  .signup {
    margin-top: 80px;
  }
</style>
