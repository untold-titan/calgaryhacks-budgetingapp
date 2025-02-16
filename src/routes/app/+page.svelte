<script>
  import { user as userStore } from "$lib/stores";

    let user = $state();
    userStore.subscribe(userData => {
        user = userData
    })
</script>