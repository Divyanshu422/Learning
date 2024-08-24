import React from 'react'
import { useFormik } from 'formik'

  function YoutubeForm() {
  
    const useFormikObject = useFormik({
      initialValues:{
        name: '',
        email: '',
        channel: ''
      },
      onSubmit: ( (values_Object)=>{
          console.log('After clicking the submit button',values_Object)
      })
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
