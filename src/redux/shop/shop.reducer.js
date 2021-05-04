import SHOP_DATA from './shop.data.js'
const INITIAL_STATE={
  shopdata:SHOP_DATA
}
const ShopReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type){
    case 'Update_Collections':
    return{
      ...state,
      shopdata:action.payload
    }
    default:
    return state
  }
}
export default ShopReducer;
