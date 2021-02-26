import './cart-dropdown.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
import CartItem from '../cart-item/cart.item.jsx'
import {connect} from 'react-redux'
import {createSelectorCart} from '../../redux/cart/cart.selector.js'
function CartDropdown({cartitems}){
  return<div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartitems.map(
          (cartitem)=> (
        <CartItem key={cartitem.id} item={cartitem}/>
      )
    )
    }
      <CustomButton >Go to Checkout</CustomButton>
    </div>
  </div>}
  const mapStateToProps=(state)=>({
    // cartitems:state.cart.cartitems
    //with memoization
    cartitems:createSelectorCart(state)
  })
  export default connect(mapStateToProps)(CartDropdown);
