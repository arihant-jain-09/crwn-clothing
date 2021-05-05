import React, { useEffect, useState } from 'react'
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.js'
import CategoryPage from '../category/category.js'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, TransformData } from '../../firebase/firebase.utils.js'
import { useDispatch, useSelector } from 'react-redux'
import { StartFetchAsync, updateCollection } from '../../redux/shop/shop.actions.js';
import WithSpinner from '../../components/with-spinner/with-spinner.jsx';
const CollectionOverviewwithspinner=WithSpinner(CollectionOverview);
const CategoryPagewithspinner=WithSpinner(CategoryPage);
function ShopPage({match}){
  const isloading=useSelector((state)=>state.shop.isfetching);
  console.log(isloading);
  // const collectionRef=firestore.collection('collections');
  // const [isloading,setisloading]=useState(true);
    // const [collection]=useCollectionData(collectionRef,{idField:'id'})
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartFetchAsync())
    // if(collection){
    //   dispatch(updateCollection(TransformData(collection)));
    //   setisloading(false);
    // }
    return () => {
      
    }
  }, [dispatch])
  console.log(isloading);
return <div className='shop-page'>
  <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewwithspinner loading={isloading} {...props} /> } />
  <Route path={`${match.path}/:categoryId`} render={(props)=><CategoryPagewithspinner loading={isloading} {...props} />} />
</div>
}
export default ShopPage;
