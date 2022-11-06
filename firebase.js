import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBxxoFEKn2gCBMHAhmHtxaaKq4S1vOaItc",
    authDomain: "crud-89b22.firebaseapp.com",
    projectId: "crud-89b22",
    storageBucket: "crud-89b22.appspot.com",
    messagingSenderId: "714820965957",
    appId: "1:714820965957:web:916402f7fb13e909c1752c",  
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore();

export { auth ,  firebase , db };