import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "#################",
    authDomain: "#################",
    projectId: "#################",
    storageBucket: "#################",
    messagingSenderId: "#################",
    appId: "#################"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export { db, storage };