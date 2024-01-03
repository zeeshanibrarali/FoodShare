import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDyRg5Kjef9xiRUtdQ8UR-P665AE5F1SUY",
    authDomain: "foodshare-409011.firebaseapp.com",
    projectId: "foodshare-409011",
    storageBucket: "foodshare-409011.appspot.com",
    messagingSenderId: "161209538695",
    appId: "1:161209538695:web:f1284f8528a3db7902c022",
    measurementId: "G-HNWL05NBFD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);