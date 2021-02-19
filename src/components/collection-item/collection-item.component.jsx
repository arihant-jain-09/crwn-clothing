import React from 'react'
import './collection-item.styles.scss'

function CollectionItem(props){
  return <div className='collection-item'>
    <div className='image'
    style={{backgroundImage:`url(${props.image})`
    }}/>
    <div className='collection-footer'>
      <span className='name'>{props.name} </span>
      <span className='price'>{props.price}</span>
    </div>
  </div>
}
export default CollectionItem
