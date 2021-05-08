export const setCurrentUser=user=>{
  return {
  type:'SET_CURRENT_USER',
  payload:user
}};

export const googleSignInStart=()=>{
  return{
    type:'Google_SignIn_Start'
  }
}

export const SignInFailure=(error)=>{
  return{
    type:'SignIn_Failure',
    payload:error.message
  }
}

export const emailSignInStart=(emailandpassword)=>{
  return{
    type:'Email_SignIn_Start',
    payload:emailandpassword
  }
}
export const SignInSuccess=()=>{
  return{
    type:'Sign_In_Success',
  }
}
export const SignUpStart=(emailpasswordanddisplayName)=>{
  return{
    type:'SignUp_Start',
    payload:emailpasswordanddisplayName
  }
}
export const SignUpFailure=(error)=>{
  return{
    type:'SignUp_Failure',
    payload:error.message
  }
}




export const SignOutStart=()=>{
  return{
    type:'SignOut_Start'
  }
}
export const SignOutFailure=(error)=>{
  return{
    type:'SignOut_Failure',
    payload:error.message
  }
}

