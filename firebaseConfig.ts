import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0QcjeVgnW4g7R70X-PLm3qjCylAN-RPk",
    authDomain: "qr-codes-210f6.firebaseapp.com",
    projectId: "qr-codes-210f6",
    storageBucket: "qr-codes-210f6.appspot.com",
    messagingSenderId: "1024981694892",
    appId: "1:1024981694892:web:3c1fb80e8c397f0b686209",
    measurementId: "G-7Y44LDC7B6"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)