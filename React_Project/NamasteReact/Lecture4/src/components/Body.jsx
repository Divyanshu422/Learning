import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

function Body() {
  const [filteredData, setFilteredData] = useState([]); // Initialize as an empty array
  const [data, setData] = useState([]); // Initialize as an empty array
  const [searchText, setSearchText] = useState("");

  // Use the useEffect hook to fetch data on mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const result = await response.json();
    const restaurants = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; // Fallback to empty array
    setFilteredData(restaurants);
    setData(restaurants);
  };

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
  };

  return (filteredData.length === 0) ? (
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
