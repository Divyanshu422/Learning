import React from 'react'

function RandomGif() {
    // Defining the function which executed when the generate button is clicked
    const gifChangeHandler = () => {
        // Here we would make a fetch request to a public API to get a random gif
        // and update the image source
    }
  return (
    <div className='flex flex-col w-8/12 mx-auto bg-green-400 rounded-lg border-r-0 items-center justify-center'>   
        <h1 className='text-2xl font-bold py-4 mt-2'>Random Gif</h1>
        <img src='' alt="" width='450px'/>
        <button onClick = {gifChangeHandler} className='bg-green-200 text-center w-10/12 py-3 rounded-lg text-xl mb-4 font-bold'>Generate</button>
      
    </div>
  )
}

export default RandomGif
