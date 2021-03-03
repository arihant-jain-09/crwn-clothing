import React from 'react'
// import shopdata from '../../pages/shop/shop.data.js'
// import {ShopSelector} from '../../redux/shop/shop.selector.js'
import {ShopPreview} from '../../redux/shop/shop.selector.js'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component.jsx'
function CollectionPreview({shopdata}){
return <div>
{shopdata.map((shop)=>{
  return <div key={shop.id} className='collection-preview'>
    <h1 className='title'>{shop.title}</h1>
    <div className='preview'>
    {shop.items.filter((val,i)=>{
      return i<4;
    }).map((s)=>{
      return <CollectionItem key={s.id} item={s} name={s.name} image={s.imageUrl} id={s.id} price={s.price}/>
    })}
  </div>
  </div>
})}
</div>
}
const mapStateToProps=createStructuredSelector({
  // shopdata:ShopSelector,
  shopdata:ShopPreview
})
export default connect(mapStateToProps)(CollectionPreview);
