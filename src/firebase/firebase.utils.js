import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyAIUO4rbKMlKZ5VSxp5BB_mmn0kq4OTJOk",
    authDomain: "crwn-db-2339c.firebaseapp.com",
    projectId: "crwn-db-2339c",
    storageBucket: "crwn-db-2339c.appspot.com",
    messagingSenderId: "359344673273",
    appId: "1:359344673273:web:136bca41b31364a65c2d28",
    measurementId: "G-GMDW7PBZC0"
  };
  firebase.initializeApp(config)
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;