import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-2gp4v3SxAjPaaYRtJmbByFnvXN6THUc",
  authDomain: "app-71067.firebaseapp.com",
  databaseURL: "https://app-71067.firebaseio.com",
  projectId: "app-71067",
  storageBucket: "app-71067.appspot.com",
  messagingSenderId: "274261389560",
  appId: "1:274261389560:web:e4e0f1718908390e07cb0d",
  measurementId: "G-7XX3N01KRR",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
