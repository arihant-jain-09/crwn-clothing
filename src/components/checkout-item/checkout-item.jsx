import './checkout-item.styles.scss'
import {useDispatch} from 'react-redux'
import {removeItem,DecreaseItem, addItem} from '../../redux/cart/cart.actions.js'
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
        dispatch(DecreaseItem(cartitem));
      }}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>{
        dispatch(addItem(cartitem))
      }}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={()=>{dispatch(removeItem(cartitem))}}>&#10005;</div>
  </div>
)}

export default CheckoutItem;
