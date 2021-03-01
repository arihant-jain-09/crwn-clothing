import React from 'react';
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {createSelectorCart, createSelectorCartTotal} from '../../redux/cart/cart.selector.js'
import CheckoutItem from '../../components/checkout-item/checkout-item.jsx'
const CheckoutPage = ({cartitems,total}) => (
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
  </div>
);
export const mapStateToProps = createStructuredSelector({
  cartitems:createSelectorCart,
  total:createSelectorCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);
