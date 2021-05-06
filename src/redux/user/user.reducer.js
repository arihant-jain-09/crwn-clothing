const INITIAL_STATE={
  currentUser:null,
  errormsg:''
}
const userReducer=(state=INITIAL_STATE,action)=>{
  switch(action.type){
    case 'SET_CURRENT_USER':
      return{
        ...state,
        currentUser:action.payload,
        errormsg:''
      }
      case 'SignIn_Failure':
      case 'SignOut_Failure':
      case 'SignUp_Failure':
      return{
        ...state,
        errormsg:action.payload
      }
      default:
        return state
  }
}
export default userReducer;
