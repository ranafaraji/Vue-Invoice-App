import firebase from "firebase/app";
import "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBDGwBJP6evxmx4EaRN5R7hiUXJScMz-rE",
    authDomain: "invoice-app-yt-f19b5.firebaseapp.com",
    databaseURL: "https://invoice-app-yt-f19b5-default-rtdb.firebaseio.com",
    projectId: "invoice-app-yt-f19b5",
    storageBucket: "invoice-app-yt-f19b5.appspot.com",
    messagingSenderId: "864048125242",
    appId: "1:864048125242:web:4b1e1064a659f710ee6c03"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore(); 