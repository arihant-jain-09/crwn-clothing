import React from 'react'
import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles'
const WithSpinner = (WrappedComponent) => {
    const Spinner=({loading,...props})=>{
        return loading ? (
            <SpinnerOverlay>
                <SpinnerContainer>
                </SpinnerContainer>
            </SpinnerOverlay>
        ):(<WrappedComponent {...props}/>)
    }
    return Spinner
}
export default WithSpinner
