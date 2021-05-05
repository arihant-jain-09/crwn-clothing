import { firestore, TransformData } from "../../firebase/firebase.utils";

export const startFetching=()=>{
   return{
       type:'FETCH_START',
   }
}
export const successFetching=(data)=>{
    return {
        type:'FETCH_SUCCESS',
        payload:data
    }
}
export const StartFetchAsync=()=>{
    return dispatch=>{
        const collectionRef=firestore.collection('collections');
        dispatch(startFetching());
        collectionRef.get().then((snapshot)=>{
        const mydata=TransformData(snapshot);
        dispatch(successFetching(mydata));
        }).catch((error)=>dispatch(errorFetching(error.message)))
        
    }
}

export const errorFetching=(errormsg)=>{
    return{
        type:'FETCH_FAILURE',
        error:errormsg
    }
}