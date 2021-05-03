import React from 'react';
import './checkout.styles.scss'
import {useSelector} from 'react-redux'
import {createSelectorCart, createSelectorCartTotal} from '../../redux/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.jsx'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.jsx'
const CheckoutPage = () => {
  const cartitems = createSelectorCart(useSelector((state)=>state));
  const total = createSelectorCartTotal(useSelector((state)=>state));
  return <>
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        cartitems.map((cartitem)=>{
          return (
            <CheckoutItem key={cartitem.id} cartitem={cartitem}/>
          )
        })
      }
      <div className='total'>
        <span>TOTAL ${total}</span>
      </div>
      <div className='test-warning'>
          *Please use the following test card for payments*
          <br />
          4242 4242 4242 4242 - Exp:01/2022 - CVV:123
      </div>
        <StripeCheckoutButton price={total}/>
    </div>
  </>
}

export default CheckoutPage;
