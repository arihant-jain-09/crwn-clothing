import React from 'react'
import './menu-item.styles.scss'
function MenuItem(props){
  return <div className={`${props.size} menu-item`}>
    <div className='background-image' style={{ backgroundImage:`url(${props.imageurl})` }}/>
  <div className='content'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
  </div>
  </div>
}
export default MenuItem;
