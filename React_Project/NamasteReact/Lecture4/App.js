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

const RestaurantCard = () => {
  return(
    <div>
      <h3>Meghana Foods</h3>
    </div>
  )
} 

const Body = () => {
  return (
    <div className='body'>
      <div>
        <h1>Search Content</h1>
      </div> 
      <div className="restaurant-container">
        <RestaurantCard/>
      </div>
    </div>
  );
}



const App = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
