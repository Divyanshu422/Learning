import React from 'react'
import { data } from '../../data'
import RestaurantCard from './RestaurantCard'
function Body() {
  return (
    <div>
        <div className="body">
            <div>
                <h3>Search Content</h3>
            </div>
            <div className="restaurant-container">
                {data.map((data, index) => (
                <RestaurantCard key={data?.info?.id} resData={data.info} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Body
