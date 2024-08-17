import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
//* To use the API key in your React components or JavaScript files, you can access it through process.env.

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


  //* Url to be hit when clicking on the API:
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function RandomGif() {
    //  Variable which will show the gif image
    const {gif, setGif} = useState('');

    // Generating the async function to call the API
    async function fetchData(){
        try {
            const response = await axios.get(url);
            console.log(response);
          
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    //* Using the useEffect to call the async function
    useEffect(()=>{
        fetchData();
    },)


    // Defining the function which executed when the generate button is clicked
    const gifChangeHandler = () => {
        // Here we would make a fetch request to a public API to get a random gif
        // and update the image source
    }
  return (
    <div className='flex flex-col w-8/12 mx-auto bg-green-400 rounded-lg border-r-0 items-center justify-center'>   
        <h1 className='text-2xl font-bold py-4 mt-2'>Random Gif</h1>
        <img src={gif} alt="" width='450px'/>
        <button onClick = {gifChangeHandler} className='bg-green-200 text-center w-10/12 py-3 rounded-lg text-xl mb-4 font-bold'>Generate</button>
    </div>
  )
}

export default RandomGif;