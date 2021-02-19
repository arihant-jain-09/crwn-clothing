import React from 'react'
import shopdata from '../../pages/shop/shop.data.js'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component.jsx'
function CollectionPreview(){
return <div>
{shopdata.map((shop)=>{
  return <div className='collection-preview'>
    <h1 className='title'>{shop.title}</h1>
    <div className='preview'>
    {shop.items.filter((val,i)=>{
      return i<4;
    }).map((s)=>{
      return <CollectionItem key={s.id} name={s.name} image={s.imageUrl} id={s.id} price={s.price}/>
    })}
  </div>
  </div>
})}
</div>
}
export default CollectionPreview;
