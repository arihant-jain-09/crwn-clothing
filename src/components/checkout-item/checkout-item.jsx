import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {removeItem,DecreaseItem, addItem} from '../../redux/cart/cart.actions.js'
const CheckoutItem = ({ cartitem ,removeItem, DecreaseItem, addItem}) => {
  const {name, imageUrl, price, quantity}=cartitem
  return (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={()=>{
        DecreaseItem(cartitem)
      }}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={()=>{
        addItem(cartitem)
      }}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={()=>{removeItem(cartitem)}}>&#10005;</div>
  </div>
)}
const mapDispatchToProps=dispatch=>({
removeItem:item=>dispatch(removeItem(item)),
DecreaseItem:item=>dispatch(DecreaseItem(item)),
addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);
