import React from 'react'
import {data} from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useState } from'react';
function Body() {
    console.log(data[0].info);
  // Creating the state_Variable whose value changes with the onClick of button
  const [filteredData, setFilteredData] = useState(data);
  return (
    <div>
        <div className="body">
            <div className='fliter'>
                <button className = 'filter-btn' onClick={()=>{
                    // Filtering the data based on cost for two
                    setFilteredData(data.filter(item => item.info.avgRating >= 4.8))
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
