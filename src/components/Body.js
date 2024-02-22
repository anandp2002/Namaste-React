import { useEffect, useState } from 'react';
import { restaurantList } from '../config';
import { RestaurantCard } from './RestaurantCard';
import { SWIGGY_API } from '../config';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filteredData;
}

// initialize checkJsonData() function to check Swiggy Restaurant data
async function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    // initialize checkData for Swiggy Restaurant data
    let checkData =
      jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // if checkData is not undefined then return it
    if (checkData !== undefined) {
      return checkData;
    }
  }
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(SWIGGY_API);
    const json = await response.json();

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
    setNoResults(false);
  }

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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.length === 0 ? (
            <h1>Sorry , No Restaurants Found !</h1>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
