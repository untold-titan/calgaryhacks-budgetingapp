<script>
  import "../../styles/styles.css";
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores";
  import { getAuth } from "@firebase/auth";
  import { signInWithEmailAndPassword } from "firebase/auth/cordova";
  import "../../styles/styles.css";
    import Navigation from "../../components/Navigation.svelte";

  const auth = getAuth();

  let email = $state();
  let password = $state();

  async function LoginUser() {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        user.set(result.user);
        goto("/app/budgeting");
      })
      .catch((err) => {
        console.log(err);
      });
  }
</script>

<div class="header">
  <h1>SoloSense</h1>
  <Navigation/>
</div>

<div class="signup">
  <h1>Login</h1>
  <!-- <label>Email</label> -->
  <input bind:value={email} placeholder="Email"/><br>
  <!-- <label>Password</label><br> -->
  <input bind:value={password} placeholder="Password"/><br>
  <button class="button" onclick={LoginUser}>Login</button>
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
  .login {
    margin-top: 500px;
  }
</style>