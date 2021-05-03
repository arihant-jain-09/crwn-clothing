import React, { useEffect } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.jsx'
import { auth } from './firebase/firebase.utils';
import {useDispatch} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.js'
import { useAuthState } from 'react-firebase-hooks/auth';
// import {HideDropdown} from './redux/cart/cart.actions.js'

const App=()=> {
  const dispatch=useDispatch();
  const [user]=useAuthState(auth);
  useEffect(() => {
    dispatch(setCurrentUser(user));
    return () => {
      
    }
  }, [user,dispatch])
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
          <Route exact path = '/signin' render = {  () => user  ?
            (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)
            } />
            <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
}
export default App;
