import React from 'react'

function YoutubeForm() {
  return (
    <div>
        <form>
            {/* The value of `htmlFor` attribute shall be same as the `id` attribute of input tag */}
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name'  />

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email'  />

            <label htmlFor='channel'>Channel</label>
            <input type='text' id='channel' name='channel'  />

            <button> Submit </button>
        </form>
      
    </div>
  )
}

export default YoutubeForm
