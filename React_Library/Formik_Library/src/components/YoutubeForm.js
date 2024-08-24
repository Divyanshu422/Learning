import React from 'react'
import { useFormik } from 'formik'

const initialValues ={
  name: '',
  email: '',
  channel: ''
}
const onSubmit = (values_Object)=>{
          
}
const validate = ((values)=>{
  // Creating the error Object: with keys simular to values_Object. hence keys are error.name, error.email, error.channel
  // * the keys of the error object corresponds to the name attribute of the input fields (eg: error.name).
  // * the values to the key shall be String
    let error = {}
    if(!values.name) {
      error.name = 'Name is required'
    }
    if(!values.email) {
      error.email = 'Email not Provided'
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
      error.email = 'Invalid Email'
    }
    
    if(!values.channel) {
      error.email = 'Channel name please'
    }
    //* Returning the error Object
    return error;
  })


  function YoutubeForm() {
    const useFormikObject = useFormik({
      // initialValues:initialValues,
      initialValues,
      // onSubmit: onSubmit,
      onSubmit,
      // validate: validate
      validate
    })
   

 
    return ( 
    <div>
        <form onSubmit={useFormikObject.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' 
                   id='name' 
                   name='name' 
                   onChange={useFormikObject.handleChange} 
                   value={useFormikObject.values.name}/>

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={useFormikObject.handleChange} value={useFormikObject.values.email} />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={useFormikObject.handleChange} value={useFormikObject.values.channel} />

            <button type='submit'> Submit </button>
        </form>
      
    </div>
  )
}

export default YoutubeForm
