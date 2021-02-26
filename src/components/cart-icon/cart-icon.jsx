import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {createSelectorCartitems} from '../../redux/cart/cart.selector.js'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
function CartIcon({toggleCartHidden,itemCount}){
  return<div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
}
const mapStateToProps=(state)=>{
  // console.log("mapStateToProps called");
  return {
    hidden:state.cart.hidden,
    // itemCount:state.cart.cartitems.reduce((accumulator,cartitem)=>
    //   accumulator+cartitem.quantity
    // ,0)
    //now with memoization
    itemCount:createSelectorCartitems(state)
  }
  }
  const mapDispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
  })
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
