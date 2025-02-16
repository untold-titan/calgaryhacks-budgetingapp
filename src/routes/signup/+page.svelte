<script>
  import { goto } from "$app/navigation";
  import Navigation from "../../components/Navigation.svelte";
  import { user } from "$lib/stores";
  import { getAuth } from "@firebase/auth";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import "../../styles/styles.css"
  import EmailPassword from "../../onboaring-components/EmailPassword.svelte";
  import AnnualIncome from "../../onboaring-components/AnnualIncome.svelte";
    import Location from "../../onboaring-components/Location.svelte";
  const auth = getAuth();

  let email = $state();
  let password = $state();

  async function CreateNewUser() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        user.set(result.user);
        goto("/app");
      })
      .catch((err) => {
        console.log(err);
      });
  }
const questions = ["Email and Password", "Annual Income", "Location"]
const components = [EmailPassword, AnnualIncome, Location]
</script>
<Navigation/>

<h1 class="title">Signup Page</h1>
<div class="signup">
<form>
    <EmailPassword/>
    <AnnualIncome/><br><br>
    <Location/><br><br>
    <button class="button" onclick={CreateNewUser}>Sign up</button>
</form>
</div>