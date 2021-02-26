import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
function CartIcon({toggleCartHidden,itemCount}){
  return<div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
}
const mapStateToProps=(state)=>({
    hidden:state.cart.hidden,
    itemCount:state.cart.cartitems.reduce((accumulator,cartitem)=>
      accumulator+cartitem.quantity
    ,0)
  })
  const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
  })
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
