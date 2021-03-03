import React from 'react'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.js'
import CategoryPage from '../category/category.js'
function ShopPage({match}){
return <div className='shop-page'>
  <Route exact path={`${match.path}`} component={CollectionOverview} />
  <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
</div>
}
export default ShopPage;
