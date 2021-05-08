import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {addnewItemstart} from '../../redux/cart/cart.actions.js'
import { useDispatch,} from 'react-redux'
function CollectionItem({item,name,price,image,id}){
  const dispatch = useDispatch();
  return <>
    <div className='collection-item'>
      <div className='image'
      style={{backgroundImage:`url(${image})`
      }}/>
      <div className='collection-footer'>
        <span className='name'>{name} </span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={()=>{
        dispatch(addnewItemstart(item));
      }} inverted>Add to cart</CustomButton>
    </div>
  </>
}

export default CollectionItem
