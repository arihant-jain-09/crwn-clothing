import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.js'
import CategoryPage from '../category/category.js'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, TransformData } from '../../firebase/firebase.utils.js'
import { useDispatch } from 'react-redux'
import { updateCollection } from '../../redux/shop/shop.actions.js';
function ShopPage({match}){
  const collectionRef=firestore.collection('collections');
    const [collection]=useCollectionData(collectionRef,{idField:'id'})
    const dispatch = useDispatch();
  useEffect(() => {
    if(collection){
      dispatch(updateCollection(TransformData(collection)));
    }
    return () => {
      
    }
  }, [collection,dispatch])
return <div className='shop-page'>
  <Route exact path={`${match.path}`} component={CollectionOverview} />
  <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
</div>
}
export default ShopPage;
