 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAOL8TKFMjKEwdVZ6t_efGAqThm1ayGjgo",
  authDomain: "school-attendance-app-fde6f.firebaseapp.com",
  databaseURL: "https://school-attendance-app-fde6f-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-fde6f",
  storageBucket: "school-attendance-app-fde6f.appspot.com",
  messagingSenderId: "473740490887",
  appId: "1:473740490887:web:703f12c31e80cbcba36022",
  measurementId: "G-56FRZ68WW8"
};
 firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  