import {createSelector} from 'reselect'
const selectCart=state=>state.cart;
export const createSelectorCart=createSelector(
  [selectCart],
  cart=>cart.cartitems
)
export const createSelectorCartHidden=createSelector(
  [selectCart],
  cart=>cart.hidden)
export const createSelectorCartitems=createSelector(
  [createSelectorCart],
  cartitems=>cartitems.reduce((accumulator,cartitem)=>
    accumulator+cartitem.quantity
  ,0)
)
export const createSelectorCartTotal=createSelector(
  [createSelectorCart],
  cartitems=>cartitems.reduce((accumulator,cartitem)=>
    accumulator+ (cartitem.quantity * cartitem.price)
  ,0)
)
