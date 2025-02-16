<script>
  import "../../styles/styles.css";
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores";
  import { getAuth } from "@firebase/auth";
  import { signInWithEmailAndPassword } from "firebase/auth/cordova";
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

<p>Login Page</p>
<label>Email</label>
<input bind:value={email} />
<label>Password</label>
<input bind:value={password} />
<button onclick={LoginUser}>Login</button>