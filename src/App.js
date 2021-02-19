import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, CreateUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.js'
// import {HideDropdown} from './redux/cart/cart.actions.js'
class App extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
     const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // console.log(userAuth);
      if (userAuth) {
        // console.log(userAuth)
        const userRef = await CreateUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route exact path='/signin' component={SignInAndSignUpPage} /> */}
          <Route exact path = '/signin' render = {  () => this.props.currentUser  ?
            (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)
            } />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps=dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user)),
})
const mapStateToProps = (state)=>({
  currentUser:state.user.currentUser,
  hidden:state.user.hidden
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
