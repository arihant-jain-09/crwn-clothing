import React, { useEffect,lazy,Suspense} from 'react'
import {Route} from 'react-router-dom'
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { firestore, TransformData } from '../../firebase/firebase.utils.js'
import { useDispatch, useSelector } from 'react-redux'
// import { StartFetchAsync, updateCollection } from '../../redux/shop/shop.actions.js';
import WithSpinner from '../../components/with-spinner/with-spinner.jsx';
import { startFetching } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.jsx';

const CategoryPage=lazy(()=>import('../category/category.js'));
const CollectionPreview=lazy(()=>import('../../components/collection-preview/collection-preview.component.jsx'))

const CategoryPagewithspinner=WithSpinner(CategoryPage);
const CollectionPreviewwithSpinner=WithSpinner(CollectionPreview);


function ShopPage({match}){
  const isloading=useSelector((state)=>state.shop.isfetching);
  console.log(isloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetching())
    // if(collection){
    //   dispatch(updateCollection(TransformData(collection)));
    //   setisloading(false);
    // }
    return () => {
      
    }
  }, [dispatch])
  console.log(isloading);
return <div className='shop-page'>
  {console.log(match)}
  <Suspense fallback={<Spinner/>}>
    <Route exact path={`${match.path}`} render={(props)=><CollectionPreviewwithSpinner loading={isloading} {...props} /> } />
    <Route path={`${match.path}/:categoryId`} render={(props)=><CategoryPagewithspinner loading={isloading} {...props} />} />
  </Suspense>
</div>
}
export default ShopPage;
