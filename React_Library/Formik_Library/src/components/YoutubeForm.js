import React from 'react'
import { useFormik } from 'formik'

  function YoutubeForm() {
  
    const useFormikObject = useFormik({
      initialValues:{
        name: '',
        email: '',
        channel: ''
      }
    })

    console.log(useFormikObject.values);

    return ( 
    <div>
        <form>
            {/*  For tracking the fields value and maintaining the state -> we need to use the onChange and value attribute */}
            {/* The useFormik hook provides the handleChange method, which is used to update the form field values. When a user interacts with an input field (e.g., typing into a text field), handleChange updates the corresponding value in formik.values based on the name attribute of the input field.
           */}
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={useFormikObject.handleChange} value={useFormikObject.values.name}/>

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={useFormikObject.handleChange} value={useFormikObject.values.email} />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={useFormikObject.handleChange} value={useFormikObject.values.channel} />

            <button> Submit </button>
        </form>
      
    </div>
  )
}

export default YoutubeForm
