import React from 'react'

import {CDN_URL} from '../utils/url'

function RestaurantCard({resData}) {
    const styleCard = {
        backgroundColor: "#FFE5CF",
    };
    // Destructuring the component
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData;
    return (
      <div className="restaurant-card" style={styleCard}>
        {/* Using 2 brackets for providing the styles -> outer bracket represent the jsx and inner bracket -> Css_object */}
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-logo"
          className="image-card"
        />
        <h3 style={{ color: "#557C56" }}>{name}</h3>
        <h4> {cuisines.join(", ")}</h4>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo} </h4>
      </div>
    );
}

export default RestaurantCard
