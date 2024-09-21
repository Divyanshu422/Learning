import React from 'react'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from'react';
import Shimmer from './Shimmer';


function Body() {

  const [filteredData, setFilteredData] = useState([]);  
  // Creating a variable which stores the data and not changes everytime
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState();

  //* Using the useEffect hook: 
  useEffect(() =>{
    fetchData()
  },[])

  async function fetchData() {
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const response = await data.json();
   let data1 = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   setFilteredData(data1);
   setData(data1);
  }

  console.log('component called');
  // * filteredData is the state Variable which is populated using Api call
  return (filteredData.length === 0)? (<Shimmer/>):(
    <div>
        <div className="body">
            <div className='fliter'>
              <div className = 'search-container'>
                <input type="text" placeholder="Search for restaurants" 
                value={searchText} onChange={(e) => {setSearchText(e.target.value) }}/>

                <button className = 'search-btn' onClick={() => {
                  // Filtering the data based on search text
                  setFilteredData(data.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase())))
                }}>Search</button>

              </div>
                <button className = 'filter-btn' onClick={()=>{
                    // Filtering the data based on cost for two
                    setFilteredData(filteredData.filter(item => item.info.avgRating >= 4.5))
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