import './cart-dropdown.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
function CartDropdown(){
  return<div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton >Go to Checkout</CustomButton>
    </div>
  </div>}
  export default CartDropdown;
