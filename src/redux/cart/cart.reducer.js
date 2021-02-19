import {addItemToCart} from './cart.utils.js'
const initialState={
  hidden:true,
  cartitems:[]
}
const cartReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'hide_it':
      return {
        ...state,
        hidden:!state.hidden,
      }
      case 'ADD_ITEM':
      return {
        ...state,
        // cartitems:[...state.cartitems,action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
        }
    default:
      return state
  }
}
export default cartReducer;
