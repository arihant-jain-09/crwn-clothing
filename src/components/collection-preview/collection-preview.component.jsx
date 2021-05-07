import React from 'react'

// import {ShopPreview} from '../../redux/shop/shop.selector.js'
// import {useSelector} from 'react-redux'
import { useQuery, gql } from '@apollo/client';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component.jsx'
import Spinner from '../spinner/spinner.jsx';

const GET_COLLECTIONS=gql`
{
  collections {
    id
    title
    items{
      id
      name
      imageUrl
      price
    }
  }
}
`

function CollectionPreview(){
// const shopdata=ShopPreview(useSelector((state)=>state))
const {loading,error,data}=useQuery(GET_COLLECTIONS);
if(loading) return <Spinner/>
if(error) return <h1>404</h1>
return <div>
  {data.collections.map((shop)=>{
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
export default CollectionPreview;
