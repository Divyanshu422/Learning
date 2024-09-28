import React from 'react';
import { useState, useEffect } from 'react';
function useRestaurantData(url) {
  
    const [filteredData, setFilteredData] = useState([]); // Initialize as an empty array
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        fetchData();
    },[url])

    const fetchData = async () => {
        const response = await fetch(url);
        const result = await response.json();
        const restaurants = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; // Fallback to empty array
        setFilteredData(restaurants);
        // console.log('the received data is ', restaurants);
        setData(restaurants);
        setLoading(false);
      };

    return {filteredData, data, loading, setFilteredData}
}

export default useRestaurantData
