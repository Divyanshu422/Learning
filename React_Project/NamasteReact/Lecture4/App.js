import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/FoodLog.png";

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
const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="restaurant-card" style={styleCard}>
      {/* Using 2 brackets for providing the styles -> outer bracket represent the jsx and inner bracket -> Css_object */}
      <img
        src="https://b.zmtcdn.com/data/reviews_photos/96d/7c3548c12a019085cb6f8cca8e79496d_1641470996.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        alt="res-logo"
        className="image-card"
      />
      <h3 style={{ color: "#557C56" }}>{props.resName}</h3>
      <h4> {props.cusine}</h4>
      <h4> 4.4 stars</h4>
      <h4> 38 min </h4>
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
        <RestaurantCard
          resName="Dhaba Estd 1986 Delhi"
          cusine="North Indian, Desserts"
        />
        <RestaurantCard resName="Burger King" cusine="Fast Food, Burgers" />
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
