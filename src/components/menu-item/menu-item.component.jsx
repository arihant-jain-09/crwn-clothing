import React from 'react'
import './menu-item.styles.scss'
import { useHistory,useRouteMatch } from "react-router-dom";
function MenuItem(props){
  let history=useHistory();
  let match=useRouteMatch();
  return <div className={`menu-item--${props.size} menu-item`} onClick={()=>{
    console.log(match);
    history.push(`${match.url}${props.linkUrl}`)}
  }>
    <div className='menu-item__backgroundimage' style={{ backgroundImage:`url(${props.imageurl})` }}/>
  <div className='menu-item__content'>
    <h1 className='menu-item__content-title'>{props.title.toUpperCase()}</h1>
    <span className='menu-item__content-subtitle'>SHOP NOW</span>
  </div>
  </div>
}
export default MenuItem;


// function MenuItem(props){
//   let history=useHistory();
//   let match=useRouteMatch();
//   return <div className={`${props.size} menu-item`} onClick={()=>{
//     console.log(match);
//     history.push(`${match.url}${props.linkUrl}`)}
//   }>
//     <div className='background-image' style={{ backgroundImage:`url(${props.imageurl})` }}/>
//   <div className='content'>
//     <h1 className='title'>{props.title.toUpperCase()}</h1>
//     <span className='subtitle'>SHOP NOW</span>
//   </div>
//   </div>
// }
