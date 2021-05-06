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
export const ClearCart=()=>{
  return{
    type:'Clear_Cart_saga',
  }
}
