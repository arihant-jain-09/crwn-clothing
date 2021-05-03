import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignIn=()=> {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [myuser,setmyuser]=useState({
    email:'',
    password:''
  })
  const handleSubmit = event => {
    event.preventDefault();
    try {
      signInWithEmailAndPassword(myuser.email,myuser.password);
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setmyuser(()=>{
        return{
          ...myuser,
          [name]: value
      }
    })
  };

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={myuser.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={myuser.password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

export default SignIn;
