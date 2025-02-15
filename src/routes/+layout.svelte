<script>
    import { initializeApp } from "@firebase/app";
    import { setContext } from "svelte";
  
    // Init firebase at the root of the app so it can be passed down into the rest of the app.
    let { data } = $props();
  
    const firebaseConfig = {
      apiKey: data.firebaseKeys.apikey,
      authDomain: data.firebaseKeys.authdomain,
      projectId: data.firebaseKeys.projid,
      storageBucket: data.firebaseKeys.bucket,
      appId: data.firebaseKeys.appid,
    };
    
    export const app = initializeApp(firebaseConfig);
  </script>
  <slot></slot>