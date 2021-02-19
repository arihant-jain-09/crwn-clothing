import './App.css';
import React,{useState,useEffect} from 'react';
import Hompage from './pages/homepage/homepage.component.jsx'
import {Switch,Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import {auth,CreateUserProfileDocument} from './firebase/firebase.utils.js'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
function App() {
  const [CurrentUser,setCurrentUser]=useState(null);
  var unsubscribe=null;
  useEffect(()=>{
    // unsubscribe=auth.onAuthStateChanged(async (user)=>{
    //   CreateUserProfileDocument(user)
      // setCurrentUser(user)
      // console.log(user)
      unsubscribe=auth.onAuthStateChanged(async (userAuth)=>{
        if(userAuth){
          const userRef=await CreateUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot =>{
            setCurrentUser(()=>{
              return {
                currentUser:{
                  id: snapShot.id,
                  ...snapShot.data()
                }
              }
            })
          })
        }
        else(
          setCurrentUser({
            currentUser:userAuth
          })
        )
    })
    console.log(CurrentUser)
    return()=>{
      unsubscribe();
    }
  })

  return (
    <div>
      <Header currentUser={CurrentUser}/>
      {console.log('App rendered')}
      <Switch>
      <Route exact path='/' component={Hompage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
  </div>
  );
}

export default App;
