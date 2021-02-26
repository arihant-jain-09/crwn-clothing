import {createSelector} from 'reselect'
const selectCart=state=>state.cart;
export const createSelectorCart=createSelector(
  [selectCart],
  cart=>cart.cartitems
)
export const createSelectorCartitems=createSelector(
  [createSelectorCart],
  cartitems=>cartitems.reduce((accumulator,cartitem)=>
    accumulator+cartitem.quantity
  ,0)
)
