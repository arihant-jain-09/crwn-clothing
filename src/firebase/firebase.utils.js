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
  export const addCollectionAndDocuments=async(collectionkey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionkey);
    const batch=firestore.batch();
    objectsToAdd.map((item)=>{
      const newDocRef=collectionRef.doc();
      return batch.set(newDocRef,{
        title:item.title,
        items:item.items
      })
    })
    return await batch.commit().then((val)=>console.log(val))
  }
  export const TransformData=(collections)=>{
    const transformedCollection=collections.docs.map((item)=>{
      const {title,items}=item.data();
      return {
        title:title,
        id:item.id,
        items:items,
        routeName:encodeURI(title.toLowerCase()),
      }
    })
    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator
    },{})    
  }

  export const CreateUserProfileDocument=(user,displayName)=>{
    const userRef=firestore.collection('users').doc(user.uid);
    userRef.set({
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
      displayName: displayName ? displayName: user.displayName,
      email:user.email
    },{merge:true})
  }

  export const addCartitems=(cartitems)=>{
    const userRef=firestore.collection('users').doc(auth.currentUser.uid);
    userRef.set({
      cartitems:cartitems
    },{merge:true})
  }

  export const GetCurrentCartItems=async()=>{
    const cartref=firestore.collection('users').doc(auth.currentUser.uid);
    return await cartref.get().then((snapshot)=>snapshot.data().cartitems)
  }
 
  export const Googleprovider=new firebase.auth.GoogleAuthProvider()
  Googleprovider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(Googleprovider);
  export default firebase;
