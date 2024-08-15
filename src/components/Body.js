import { useEffect, useState, useContext } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { SWIGGY_API } from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData, checkJsonData } from '../utils/helper';
// import UserContext from '../utils/UserContext';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(SWIGGY_API).catch((err) => {
      alert('Check your internet connection');
    });

    const json = await response.json();
    console.log(json.data.cards);

    const resData = checkJsonData(json);

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  // const { user, setUser } = useContext(UserContext);

  return (
    <>
      {/* Fixed Container for Search */}
      <div className="fixed top-0 left-0 w-full flex justify-center bg-stone-50 shadow-md z-10 py-4 mt-14">
        <input
          type="text"
          className="border border-swiggy-orange p-1 rounded focus:bg-slate-50 focus:border-swiggy-orange focus:outline-none"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="ml-6 bg-swiggy-orange text-white px-2 rounded-md hover:bg-orange-500"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Padding to ensure content is visible below fixed container */}
      <div className="pt-20 mt-20">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap items-center justify-center ">
            {filteredRestaurants?.length === 0 ? (
              <h1>Sorry, No Restaurants Found!</h1>
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
      </div>
    </>
  );
};

export default Body;
