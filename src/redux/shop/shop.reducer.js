// import SHOP_DATA from './shop.data.js'
const INITIAL_STATE={
  shopdata:{},
  isfetching:true,
  errormessage:''
}
const ShopReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type){
    case 'FETCH_START':
      return {
        ...state,
        isfetching:true
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        shopdata:action.payload,
        isfetching:false
      }
    case 'FETCH_FAILURE':
      return{
        ...state,
        errormessage:action.payload
      }
    default:
    return state
  }
}
export default ShopReducer;
