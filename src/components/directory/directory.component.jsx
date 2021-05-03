import React from 'react'
import './directory.styles.scss'
import sections from './directory.data'
import MenuItem from '../menu-item/menu-item.component'
function Directory(){
return(
  <div className='directory-menu'>
    {sections.map((dir)=>{
      return <MenuItem key={dir.id} title={dir.title} imageurl={dir.imageUrl} size={dir.size} linkUrl={dir.linkUrl}/>
  })}
</div>
)
}
export default Directory;
