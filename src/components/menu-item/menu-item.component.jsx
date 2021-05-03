import React from 'react'
import './menu-item.styles.scss'
import { useHistory,useRouteMatch } from "react-router-dom";
function MenuItem(props){
  let history=useHistory();
  let match=useRouteMatch();
  return <div className={`${props.size} menu-item`} onClick={()=>{
    console.log(match);
    history.push(`${match.url}${props.linkUrl}`)}
  }>
    <div className='background-image' style={{ backgroundImage:`url(${props.imageurl})` }}/>
  <div className='content'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <span className='subtitle'>SHOP NOW</span>
  </div>
  </div>
}
export default MenuItem;
