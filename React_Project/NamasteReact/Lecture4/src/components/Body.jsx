import React, { useState, useContext } from 'react';
import RestaurantCard, {WithPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { restaurantDataUrl } from '../utils/url';
import useRestaurantData from '../utils/customHook/useRestaurantData';
import useOnlineStatus from '../utils/customHook/useOnlineStatus';
import { UserContext } from '../utils/Context/UserContext';
function Body() {
  const [searchText, setSearchText] = useState("");
  const { filteredData, loading, data, setFilteredData } = useRestaurantData(restaurantDataUrl);
  console.log(filteredData);

  const {setUserInfo} = useContext(UserContext);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) 
    return <h1 className="text-center text-xl text-red-500">Please check the internet</h1>;

  return loading ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="relative flex-grow mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search for restaurants"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
            </div>
            <button
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={filterTopRated}
        >
          Top Rated
        </button>
        <input 
          onChange={(e)=>setUserInfo((value)=>e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredData.map((restaurant) => (
          <Link to={`/restaurant/${restaurant?.info?.id}`} className="no-underline" key={restaurant?.info?.id}> 
            {/* Implementing the higher order Component over the restauraCard Component */}
            {
                (restaurant.info.avgRating > 4.3)? <RestaurantCardPromoted resData={restaurant.info}/> :  <RestaurantCard resData={restaurant.info} />
            }
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;