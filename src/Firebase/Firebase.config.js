// resgister-auth-2
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD1WFopZjhxvfIaY9txF3TuQ6-S7mjuTo",
  authDomain: "resgister-auth-2.firebaseapp.com",
  projectId: "resgister-auth-2",
  storageBucket: "resgister-auth-2.appspot.com",
  messagingSenderId: "231303745242",
  appId: "1:231303745242:web:c0619e7ecd42fa582a1fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;