<script>
    import { initializeApp } from "@firebase/app";
  
    // Init firebase at the root of the app so it can be passed down into the rest of the app.
    let { data, children} = $props();
  
    const firebaseConfig = {
      apiKey: data.firebaseKeys.apikey,
      authDomain: data.firebaseKeys.authdomain,
      projectId: data.firebaseKeys.projid,
      storageBucket: data.firebaseKeys.bucket,
      appId: data.firebaseKeys.appid,
    };
    
    export const app = initializeApp(firebaseConfig);
  </script>

  {@render children()}