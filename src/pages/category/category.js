// import CollectionItem from '../../components/collection-item.component.jsx'
import './category.scss'
import {ComponentSelect} from '../../redux/shop/shop.selector.js'
import CollectionItem from '../../components/collection-item/collection-item.component.jsx'
import {useSelector} from 'react-redux'
const CategoryPage=({match})=>{
  const shopdata=ComponentSelect(match.params.categoryId)(useSelector((state)=>state))
  const {title,items}=shopdata
  // console.log(match.params.categoryId);
  return <div className='category'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {
        items.map((item)=>(
          <CollectionItem key={item.id} item={item} name={item.name} image={item.imageUrl} id={item.id} price={item.price}/>
        )
      )
      }
      </div>
  </div>
}
export default CategoryPage;
