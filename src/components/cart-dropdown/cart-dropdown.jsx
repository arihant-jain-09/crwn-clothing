import './cart-dropdown.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
// import CartItem from '../cart-item/cart.item.jsx'
// import {connect} from 'react-redux'
function CartDropdown(){
  return<div className='cart-dropdown'>
    <div className='cart-items'>
      {/* {
        cartitems.map(
          (cartitem)=> (
        <CartItem key={cartitem.id} item={cartitem}/>
      )
    )
    } */}
      <CustomButton >Go to Checkout</CustomButton>
    </div>
  </div>}
  // const mapStateToProps=(state)=>({
  //   cartitems:state.cart.cartitems
  // })
  export default CartDropdown;
