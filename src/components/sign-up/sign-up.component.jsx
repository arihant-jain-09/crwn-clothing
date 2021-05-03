import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils.js';
import {useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './sign-up.styles.scss';

const SignUp=()=> {
  const [myuser,setmyuser]=useState({
    email:'',
    password:'',
    displayName:'',
    confirmPassword:'',
    myuser:''
  })
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = async event => {
    event.preventDefault();
    if (myuser.password !== myuser.confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      console.log(myuser);
      createUserWithEmailAndPassword(myuser.email,myuser.password)
    } 
    catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setmyuser(()=>{
      return {
        ...myuser,
        [name]: value
      }
    })
  };
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={myuser.displayName}
            handleChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={myuser.email}
            handleChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={myuser.password}
          handleChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={myuser.confirmPassword}
            handleChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }


export default SignUp;
