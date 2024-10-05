import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { restaurantDataUrl } from '../utils/url';
import useRestaurantData from '../utils/customHook/useRestaurantData';
import useOnlineStatus from '../utils/customHook/useOnlineStatus';
function Body() {
  // const [filteredData, setFilteredData] = useState([]); // Initialize as an empty array
  // const [data, setData] = useState([]); // Initialize as an empty array
  const [searchText, setSearchText] = useState("");

    const {filteredData, loading, data, setFilteredData} = useRestaurantData(restaurantDataUrl)
    console.log(setFilteredData);


  // Handle search functionality
  const handleSearch = () => {
    if (searchText.trim() === "") {
      setFilteredData(data); // Reset to original data if search is empty
    } else {
      setFilteredData(data.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase())));
    }
  };

  // Handle filtering by top-rated restaurants
  const filterTopRated = () => {
    setFilteredData(data.filter(item => item.info.avgRating >= 4.5)); // Filter from original data
    console.log('inside the function ',filteredData)
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return <h1>Please check the internet</h1>;
  
  return (loading) ? (
    <Shimmer />
  ) : (
    <div>
      <div className="body">
        <div className="filter">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <button className="filter-btn" onClick={filterTopRated}>
            Top Rated
          </button>
        </div>
        <div className="restaurant-container">
          {filteredData.map((restaurant) => (
            <Link to={`/restaurant/${restaurant?.info?.id}`} className="no-underline" key={restaurant?.info?.id}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
