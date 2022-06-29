import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9F9LOQdjhiT6Zaz1CjjJ5WFnB4PEIPPM",
    authDomain: "authentication-b604c.firebaseapp.com",
    projectId: "authentication-b604c",
    storageBucket: "authentication-b604c.appspot.com",
    messagingSenderId: "280956392566",
    appId: "1:280956392566:web:286efe1be0a4ac72673b57",
    measurementId: "G-RNRPZ5JYQ3"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);