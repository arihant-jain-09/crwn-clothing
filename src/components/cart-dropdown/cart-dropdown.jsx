import './cart-dropdown.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {withRouter} from 'react-router-dom'
import CartItem from '../cart-item/cart.item.jsx'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {createSelectorCart} from '../../redux/cart/cart.selector.js'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
function CartDropdown({cartitems,history,toggleCartHidden}){
  return<div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartitems.length===0? <span className='empty-message'>Your cart is empty</span>:
        cartitems.map(
          (cartitem)=> (
        <CartItem key={cartitem.id} item={cartitem}/>
      )
    )

    }
      <CustomButton onClick={()=>{
         history.push('/checkout')
         toggleCartHidden()
      }}>Go to Checkout</CustomButton>
    </div>
  </div>}
  const mapStateToProps=createStructuredSelector({
    // cartitems:state.cart.cartitems
    //with memoization
    cartitems:createSelectorCart,
  })
 const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
  })
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
