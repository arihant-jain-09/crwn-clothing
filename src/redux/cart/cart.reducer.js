
const initialState={
  hidden:true
}
const cartReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'hide_it':
      return {
        ...state,
        hidden:!state.hidden,
      }
    default:
      return state
  }
}
export default cartReducer;
