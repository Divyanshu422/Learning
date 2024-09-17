import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/FoodLog.png";
import { data } from "./data";
// export const resData = {
//   id: "655665",
//   name: "Subway",
//   cloudinaryImageId:
//     "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/c0e795b0-8a23-4a11-bd90-0b08e4ecca9e_655665.jpg",
//   locality: "Jasola Apollo Metro Station",
//   areaName: "Pacific Jasola",
//   costForTwo: "₹350 for two",
//   cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
//   avgRating: 4.2,
//   parentId: "2",
//   avgRatingString: "4.2",
//   totalRatingsString: "430",
//   sla: {
//     deliveryTime: 25,
//     lastMileTravel: 2.3,
//     serviceability: "SERVICEABLE",
//     slaString: "25-30 mins",
//     lastMileTravelString: "2.3 km",
//     iconType: "ICON_TYPE_EMPTY",
//   },
//   availability: {
//     nextCloseTime: "2024-09-18 01:00:00",
//     opened: true,
//   },
//   badges: {
//     imageBadges: [
//       {
//         imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
//         description: "Delivery!",
//       },
//     ],
//     textExtendedBadges: [
//       {
//         iconId: "guiltfree/GF_Logo_android_3x",
//         shortDescription: "options available",
//         fontColor: "#7E808C",
//       },
//     ],
//   },
// };

export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// * Inline style injected in the Restaurant container
const styleCard = {
  backgroundColor: "#FFE5CF",
};
const RestaurantCard = ({ resData }) => {
  console.log("the resData is ", resData);
  // Destructuting
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } = resData;
  return (
    <div className="restaurant-card" style={styleCard}>
      {/* Using 2 brackets for providing the styles -> outer bracket represent the jsx and inner bracket -> Css_object */}
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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
};

const Body = () => {
  return (
    <div className="body">
      <div>
        <h3>Search Content</h3>
      </div>
      <div className="restaurant-container">
        {data.map((data) => (
          <RestaurantCard resData={data.info} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
