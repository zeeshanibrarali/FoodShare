import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
    authDomain: "foodshare-409011.firebaseapp.com",
    projectId: "foodshare-409011",
    storageBucket: "foodshare-409011.appspot.com",
    messagingSenderId: "161209538695",
    appId: "1:161209538695:web:f1284f8528a3db7902c022",
    measurementId: "G-HNWL05NBFD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
