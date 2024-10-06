import React from 'react';
import { CDN_URL } from '../utils/url';

function RestaurantCard({ resData }) {
  // Destructuring the component
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restaurant-logo"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-green-700 text-lg font-bold mb-2">{name}</h3>
      <h4 className="text-gray-600 text-sm mb-1">{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-600 font-semibold">{avgRating} stars</h4>
      <h4 className="text-gray-800 font-medium">{costForTwo}</h4>
    </div>
  );
}

export default RestaurantCard;