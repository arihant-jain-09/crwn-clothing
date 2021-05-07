// import CollectionItem from '../../components/collection-item.component.jsx'
import './category.scss'
import {ComponentSelect} from '../../redux/shop/shop.selector.js'
import CollectionItem from '../../components/collection-item/collection-item.component.jsx'
import {connect} from 'react-redux'
import { gql, useQuery } from '@apollo/client'
import Spinner from '../../components/spinner/spinner'

const GET_COLLECTION_BY_TITLE=gql`
    query getCollectionsByTitle($title:String!){
      getCollectionsByTitle(title:$title){
        id
        title
        items{
          id
          name
          price
          imageUrl
        }
      }
    }
`

const CategoryPage=({match,shopdata})=>{
  const {loading,error,data}=useQuery(GET_COLLECTION_BY_TITLE,{
    variables:{title:match.params.categoryId}
  })
  if(loading) return <Spinner/>
  const {title,items}=data.getCollectionsByTitle
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
