import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmer from './Shimmer';
function RestaurantMenu() {

    const [resInfo, setResInfo] = useState(null);
    // Assign -> null @ for string
    // const [name, setName] = useState("") 
    let imageId = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=151656&catalog_qa=undefined&submitAction=ENTER");
        const response = await data.json();

        setResInfo(response);
        console.log( response?.data?.cards[2]?.card?.card?.info)

    }
    const { name , cuisines, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info  || {};
   console.log('the data is', resInfo?.data?.cards[2]?.card?.card?.info)
  return (
    <div>
        <h1>{name || 'Loading...'}</h1>
        {cuisines ?<h2>{cuisines.join(", ")}</h2>:null}
        <img src={imageId+cloudinaryImageId} alt='Loading image'/>
    </div>
  )
}

export default RestaurantMenu