import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB-i6JvfmScxvJy2Hb0Ip0RYLYeQQ9oYfI",
  authDomain: "catlogbeta-3-0.firebaseapp.com",
  projectId: "catlogbeta-3-0",
  storageBucket: "catlogbeta-3-0.appspot.com",
  messagingSenderId: "431959567817",
  appId: "1:431959567817:web:b1f3115ff438ec45ff8c18",
  measurementId: "G-MZNHF6DJRL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const functions = firebaseApp.functions();



export {
  firebaseApp,
  db,
  storage,
  auth,
  functions
};
