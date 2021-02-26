import addItemToCart from './cart.utils.js'
const initialState={
  hidden:true,
  cartitems:[],
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
          // myfunc:addItemToCart(state.cartitems, action.payload),
        ...state,
        // cartitems:[...state.cartitems,action.payload]
        cartitems: addItemToCart(state.cartitems, action.payload)
        }
    default:
      return state
  }
}
export default cartReducer;
