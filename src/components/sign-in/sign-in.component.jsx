import React, { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {useDispatch} from 'react-redux'
import './sign-in.styles.scss';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
const SignIn=()=> {
  const dispatch = useDispatch();
  const [myuser,setmyuser]=useState({
    email:'',
    password:''
  })
  const handleSubmit = event => {
    event.preventDefault();
    const {email,password}=myuser;
    dispatch(emailSignInStart({email,password}));      
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
            {/* <CustomButton type="button" onClick={()=>dispatch(googleSignInStart())} isGoogleSignIn>
              Sign in with Google
            </CustomButton> */}
            <button className='google-sign-in custom-button' onClick={()=>dispatch(googleSignInStart())} type="button">Sign in with Google</button>
          </div>
        </form>
      </div>
    );
  }

export default SignIn;
