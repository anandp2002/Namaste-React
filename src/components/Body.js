import { useState } from 'react';
import { restaurantList } from '../config';
import { RestaurantCard } from './RestaurantCard';

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
