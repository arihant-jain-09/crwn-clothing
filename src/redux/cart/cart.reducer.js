import addItemToCart from './cart.utils.js'
import{removeItemFromCart} from './cart.utils.js'
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
      case 'remove_item':
      return{
        ...state,
        cartitems: state.cartitems.filter((item)=>item.id!==action.payload.id)
      }
      case 'decrease_item':
      return{
        ...state,
        cartitems: removeItemFromCart(state.cartitems,action.payload)
      }
      case 'Clear_Cart_saga':
        return{
          ...state,
          cartitems:[],
          hidden:true
        }
    default:
      return state
  }
}
export default cartReducer;
