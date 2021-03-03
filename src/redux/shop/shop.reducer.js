import SHOP_DATA from './shop.data.js'
const INITIAL_STATE={
  shopdata:SHOP_DATA
}
const ShopReducer=(state=INITIAL_STATE,action)=>{
  switch (action.type){
    default:
    return state
  }
}
export default ShopReducer;
