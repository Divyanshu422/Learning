import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from'react';
import Shimmer from './Shimmer';


function Body() {

  const [filteredData, setFilteredData] = useState([]);  

  //* Using the useEffect hook: 
  useEffect(() =>{
    fetchData()
  },[])

  async function fetchData() {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const response = await data.json();
   let data1 = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   setFilteredData(data1);
   console.log(response);
  }

  return (filteredData.length === 0)? (<Shimmer/>):(
    <div>
        <div className="body">
            <div className='fliter'>
                <button className = 'filter-btn' onClick={()=>{
                    // Filtering the data based on cost for two
                    setFilteredData(data.filter(item => item.info.avgRating >= 4.5))
                }}>Top rated button</button>
                
            </div>
            <div className="restaurant-container">
                {filteredData.map((data, index) => (
                <RestaurantCard key={data?.info?.id} resData={data.info} />
                ))}
            </div>
        </div>
    </div>
  )
}


export default Body