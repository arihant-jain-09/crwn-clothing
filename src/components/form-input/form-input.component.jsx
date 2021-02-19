import React from 'react';
import './form-input.styles.scss'

function FormInput(props){
  return <div className='group' >
    <input className='form-input' label={props.label} onChange={props.handleChange} name={props.name} type={props.type} value={props.value}/>
    {/* {
      props.label?
      <label className={`${props.value.length ? 'shrink':''} form-input-label`}>

      </label>:null
    } */}
  </div>
}
export default FormInput;
