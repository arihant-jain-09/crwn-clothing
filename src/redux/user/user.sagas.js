import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { SignInFailure, SignOutFailure, SignUpFailure} from "./user.actions";
import {auth, Googleprovider} from '../../firebase/firebase.utils'
export function* GoogleSignInSuccess(){
    try{
    yield auth.signInWithPopup(Googleprovider);
    }
    catch (error){
        put(SignInFailure(error))
    }
}

export function* GoogleSignInStart(){
    yield takeLatest('Google_SignIn_Start',GoogleSignInSuccess)
}

/////////////////////////////////////////////////

export function* EmailSignInSuccess({payload}){
    const {email,password}=payload;
    try{
        yield auth.signInWithEmailAndPassword(email,password)
    }
    catch (error){
        put(SignInFailure(error))
    }
}

export function* EmailSignInStart(){
    yield takeLatest('Email_SignIn_Start',EmailSignInSuccess)
}

export function* SignOutSuccess(){
    try{
        yield auth.signOut();
    }
    catch (error){
        put(SignOutFailure(error))
    }
}

export function* SignUpSuccess({payload}){
    console.log(payload,'called');
    const {email,password}=payload;
    try{
        yield auth.createUserWithEmailAndPassword(email,password);
    }
    catch(error){
        yield put(SignUpFailure(error))
    }
}

export function* SignUpStart(){
    yield takeLatest('SignUp_Start',SignUpSuccess)
}


export function* SignOutStart(){
    yield takeLatest('SignOut_Start',SignOutSuccess)
}

export function* userSagas(){
    yield all([call(GoogleSignInStart),call(EmailSignInStart),call(SignOutStart),call(SignUpStart)])
} 