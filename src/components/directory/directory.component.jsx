import React from 'react'
import './directory.styles.scss'
import directory from './directory.data.js'
import MenuItem from '../menu-item/menu-item.component'
function Directory(){
return(<div className='directory-menu'>
  {directory.map((dir)=>{
    return <MenuItem title={dir.title} imageurl={dir.imageUrl} size={dir.size} linkUrl={dir.linkUrl}/>
  })}
</div>)
}
export default Directory
