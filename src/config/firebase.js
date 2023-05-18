import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


function Startfirebase(opt) {
  const firebaseConfig = {
    apiKey: "AIzaSyAGddkLHr4OJRYNlTJnnpJeE0DenHUIBOg",
    authDomain: "phoneauth-by-shahzad.firebaseapp.com",
    projectId: "phoneauth-by-shahzad",
    storageBucket: "phoneauth-by-shahzad.appspot.com",
    messagingSenderId: "152207948402",
    appId: "1:152207948402:web:8fc4dadfadaa2c301a20eb",
    databaseURL: "https://phoneauth-by-shahzad-default-rtdb.firebaseio.com",
  };
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  switch (opt) {
    case "Auth":
      return getAuth(app);
    case "DB":
      return getDatabase(app)

  }

}

export default Startfirebase;