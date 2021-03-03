import React from 'react'
import './directory.styles.scss'
// import directory from './directory.data.js'
import {connect} from 'react-redux'
import {directoryitems} from '../../redux/directory/directory.selector.js'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../menu-item/menu-item.component'
function Directory({sections}){
return(<div className='directory-menu'>
  {sections.map((dir)=>{
    return <MenuItem key={dir.id} title={dir.title} imageurl={dir.imageUrl} size={dir.size} linkUrl={dir.linkUrl}/>
  })}
</div>)
}
const mapStateToProps=createStructuredSelector({
  sections:directoryitems
})
export default connect(mapStateToProps)(Directory)
