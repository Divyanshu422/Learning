import React from 'react'
import {data} from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from'react';
function Body() {
  // Creating the state_Variable whose value changes with the onClick of button
  const [filteredData, setFilteredData] = useState(data);

  console.log('Body is rendered ');
  //* Using the useEffect hook: 
  useEffect(() =>{
    debugger;
    console.log('useEffect is called after the rendering the body function has been rendered');
  },[])
  return (
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





