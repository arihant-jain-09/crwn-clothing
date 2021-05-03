// import CollectionItem from '../../components/collection-item.component.jsx'
import './category.scss'
import {ComponentSelect} from '../../redux/shop/shop.selector.js'
import CollectionItem from '../../components/collection-item/collection-item.component.jsx'
import {connect} from 'react-redux'
const CategoryPage=({match,shopdata})=>{
  const {title,items}=shopdata
  console.log(match.params.categoryId);
  // console.log(shopdata);
  console.log(items);
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
const mapStateToProps = (state,otherprops)=>({
  shopdata:ComponentSelect(otherprops.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage);
