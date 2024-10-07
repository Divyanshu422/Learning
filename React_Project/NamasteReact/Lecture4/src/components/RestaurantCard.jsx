import React from 'react';
import { CDN_URL } from '../utils/url';

function RestaurantCard({ resData }) {
  // Destructuring the component
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative">
      {/* Restaurant Image */}
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restaurant-logo"
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Restaurant Name */}
      <h3 className="text-green-700 text-lg font-bold mb-2">{name}</h3>

      {/* Cuisines */}
      <h4 className="text-gray-600 text-sm mb-1">{cuisines.join(', ')}</h4>

      {/* Rating */}
      <h4 className="text-yellow-600 font-semibold">{avgRating} stars</h4>

      {/* Cost for two */}
      <h4 className="text-gray-800 font-medium">{costForTwo}</h4>
    </div>
  );
}


export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className='relative -z-3'>
        <p className="absolute -top-2 -left-2 z-10 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
          Promoted
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;