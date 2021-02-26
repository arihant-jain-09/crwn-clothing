import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {addItem} from '../../redux/cart/cart.actions.js'
import {connect} from 'react-redux'
function CollectionItem({item,name,price,image, addItem,cartitems,id}){
  return <div className='collection-item'>
    <div className='image'
    style={{backgroundImage:`url(${image})`
    }}/>
    <div className='collection-footer'>
      <span className='name'>{name} </span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>{
      console.log('clicked');
      addItem(item)
    }} inverted>Add to cart</CustomButton>
  </div>
}
const mapStateToProps = (state)=>({
  cartitems:state.cart.cartitems
})
const mapDispatchToProps = (dispatch)=>({
  addItem:(item)=>(dispatch(addItem(item)))
})
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem)
