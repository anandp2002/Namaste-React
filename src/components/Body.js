import { useEffect, useState, useContext } from 'react';
import { RestaurantCard } from './RestaurantCard';
import { SWIGGY_API } from '../config';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData, checkJsonData } from '../utils/helper';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

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

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="w-full flex justify-center pb-8 bg-stone-50 shadow-md ">
        <input
          type="text"
          className="border border-swiggy-orange p-1 rounded focus:bg-slate-100"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="ml-6 bg-swiggy-orange text-white p-1 rounded-md hover:bg-orange-500"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <input
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
          className="text-green-800 ml-8"
        ></input>
      </div>

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center ">
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
