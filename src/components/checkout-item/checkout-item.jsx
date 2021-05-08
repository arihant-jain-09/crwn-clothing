import './checkout-item.styles.scss'
import {useDispatch} from 'react-redux'
import {DecreaseItemStart, addnewItemstart, removeItem} from '../../redux/cart/cart.actions.js'
import { memo } from 'react';
const CheckoutItem = ({ cartitem}) => {
  const {name, imageUrl, price, quantity}=cartitem;
  const dispatch = useDispatch();
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={()=>{
        dispatch(DecreaseItemStart(cartitem));
      }}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>{
        dispatch(addnewItemstart(cartitem))
      }}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={()=>{dispatch(removeItem(cartitem))}}>&#10005;</div>
  </div>
)}

export default memo(CheckoutItem);
