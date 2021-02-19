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
   export async function CreateUserProfileDocument(userAuth,additionalData) {
     if(!userAuth) return;
     // console.log(firestore.doc('users/12324335'))
     const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
   }
  firebase.initializeApp(config)
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()

  const provider=new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;
