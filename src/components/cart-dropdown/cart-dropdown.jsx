import './cart-dropdown.styles.scss'
import React from 'react'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {useHistory} from 'react-router-dom'
import CartItem from '../cart-item/cart.item.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {createSelectorCart} from '../../redux/cart/cart.selector.js'
import {toggleCartHidden} from '../../redux/cart/cart.actions.js'
function CartDropdown(){
  const history=useHistory();
  const dispatch = useDispatch();
  const cartitems=createSelectorCart(useSelector((state)=>state));
  return <>
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartitems.length===0? <span className='empty-message'>Your cart is empty</span>
          :
          cartitems.map((cartitem)=> (
          <CartItem key={cartitem.id} item={cartitem}/>
        ))
      }
      </div>
      <CustomButton onClick={()=>{
          history.push('/crwn-clothing/checkout')
          dispatch(toggleCartHidden());
        }}>Go to Checkout</CustomButton>
    </div>
  </>}
  export default CartDropdown;
