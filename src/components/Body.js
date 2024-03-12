import { useEffect, useState } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { SWIGGY_API } from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData, checkJsonData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(SWIGGY_API);
    const json = await response.json();
    const resData = checkJsonData(json);

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  // const isOnline = useOnline();
  // if (!isOnline) {
  //   return <h1>Please check your internet connection ⚠️</h1>;
  // }

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

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants?.length === 0 ? (
            <h1>Sorry , No Restaurants Found !</h1>
          ) : (
            filteredRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={'restaurant/' + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
