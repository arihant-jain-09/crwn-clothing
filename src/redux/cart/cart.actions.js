export const toggleCartHidden=()=>{
  return{
  type:'hide_it',
}
}
export const addItem=(item)=>{
  return{
    type:'ADD_ITEM',
    payload:item
  }
}
export const addnewItemstart=(item)=>{
  return{
    type:'ADD_ITEM_START',
    payload:item
  }
}
export const removeItem=(item)=>{
  return{
    type:'remove_item',
    payload:item
  }
}
export const DecreaseItem=(item)=>{
  return{
    type:'decrease_item',
    payload:item
  }
}
export const DecreaseItemStart=(item)=>{
  return{
    type:'decrease_item_start',
    payload:item
  }
}
export const ClearCart=()=>{
  return{
    type:'Clear_Cart_saga',
  }
}

export const setcartitems=(cart)=>{
  return{
    type:'SET_CART_ITEMS',
    payload:cart
  }
}