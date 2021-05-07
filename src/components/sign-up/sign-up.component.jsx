import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { useDispatch } from 'react-redux';
import { SignUpStart } from '../../redux/user/user.actions';

const SignUp=()=> {
  const [myuser,setmyuser]=useState({
    email:'',
    password:'',
    displayName:'',
    confirmPassword:'',
    myuser:''
  })
  const dispatch = useDispatch();
  const handleSubmit = async event => {
    event.preventDefault();
    if (myuser.password !== myuser.confirmPassword) {
      alert("passwords don't match");
      return;
    }
    const {email,password}=myuser;
    dispatch(SignUpStart({email,password}))   
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
          <div className="button">
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }


export default SignUp;
