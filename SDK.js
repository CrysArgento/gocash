<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC3U1AuZCH1F-LtlJ5Nf6CgUowvOUyPTUM",
    authDomain: "nifty-canyon-304318.firebaseapp.com",
    projectId: "nifty-canyon-304318",
    storageBucket: "nifty-canyon-304318.appspot.com",
    messagingSenderId: "163958925667",
    appId: "1:163958925667:web:dcd364087dd524b87acb56",
    measurementId: "G-WXZRDB2FZR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>