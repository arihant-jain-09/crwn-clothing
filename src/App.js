import React, { useEffect,lazy,Suspense } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import GlobalStyles from './GlobalStyles.jsx'
import Header from './components/header/header.component';
import { auth} from './firebase/firebase.utils';
import {useDispatch} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from './components/spinner/spinner.jsx';
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './components/error-boundaries/error-boundaries.styles'
import CustomButton from './components/custom-button/custom-button.component.jsx';
// import {HideDropdown} from './redux/cart/cart.actions.js'

const HomePage=lazy(()=>import('./pages/homepage/homepage.component'));
const ShopPage=lazy(()=>import('./pages/shop/shop.component'))
const SignInAndSignUpPage=lazy(()=>import('./components/sign-in-and-sign-up/sign-in-and-sign-up.component'))
const Checkout=lazy(()=>import('./pages/checkout/checkout.jsx'))


const ErrorFallback=({error,resetErrorBoundary})=>{
  return <>
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
      <ErrorImageText>Sorry this page is broken</ErrorImageText>
      <CustomButton onClick={resetErrorBoundary}>Try again</CustomButton>
    </ErrorImageOverlay>
  </>
  }

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
        <GlobalStyles/>
        <Header />
        <Switch>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/crwn-clothing' component={HomePage} />
            <Route path='/crwn-clothing/shop' component={ShopPage} />
            <Route exact path = '/crwn-clothing/signin' render = {  () => user  ?
              (<Redirect to='/crwn-clothing'/>) : (<SignInAndSignUpPage/>)
              } />
              <Route exact path='/crwn-clothing/checkout' component={Checkout} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
}
export default App;
