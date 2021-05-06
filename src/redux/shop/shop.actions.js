
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

export const errorFetching=(errormsg)=>{
    return{
        type:'FETCH_FAILURE',
        error:errormsg
    }
}