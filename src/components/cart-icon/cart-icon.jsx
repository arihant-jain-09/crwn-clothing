import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {createSelectorCartitems} from '../../redux/cart/cart.selector.js'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
function CartIcon(){
  const dispatch = useDispatch();
  const itemCount=createSelectorCartitems(useSelector((state)=>state))
  return <>
    <div className='cart-icon' onClick={()=>dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  </>
}
export default CartIcon;
