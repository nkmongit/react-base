import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import data from "../utils/mockData";

const Body = () => {
  const [restaurants, setRestaurants] = useState(data.restaurants);

  const getTopRatedRestaurants = () => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setRestaurants(filteredRestaurants);
  };

  const getAllRestaurants = () => {
    setRestaurants(data.restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button onClick={getAllRestaurants} className="filter-btn">
          All Restaurants
        </button>
        <button onClick={getTopRatedRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
