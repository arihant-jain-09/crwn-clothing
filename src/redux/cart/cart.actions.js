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
