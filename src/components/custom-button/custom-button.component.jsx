import React from 'react'
import './custom-button.styles.scss'

function CustomButton(props){
  return <button className={`${props.isGooglesignin?'google-sign-in':''} custom-button`} onClick={props.onClick}>
    {props.children}
  </button>
}
export default CustomButton
