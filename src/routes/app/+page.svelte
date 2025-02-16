<script>
  import { user as userStore } from "$lib/stores";

    let user = $state();
    userStore.subscribe(userData => {
        user = userData
    })

    console.log("Logged In Successfully")
    console.log(user)
</script>

<p>dashboard</p>
<p>{user.email}</p>