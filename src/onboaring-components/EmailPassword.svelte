<script>
    import { goto } from "$app/navigation";
    import { user } from "$lib/stores";
    import { getAuth } from "@firebase/auth";
    import { createUserWithEmailAndPassword } from "firebase/auth";
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
  // User responses (centralized)
  </script>
<label>Email</label>
<input bind:value={email}/><br><br>
<label>Password</label>
<input bind:value={password} /><br><br>
