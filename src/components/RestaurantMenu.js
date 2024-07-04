import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, recommended] = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center p-10">
      <div>
        <h1 className="font-bold text-2xl mb-5">{restaurant.name}</h1>
        <img
          className="w-28"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        ></img>
        <p>{restaurant.areaName}</p>
        <h3>{restaurant.city}</h3>
        <h4>{restaurant.avgRating} stars</h4>
        <h5>{restaurant.costForTwoMessage}</h5>
      </div>
      <div></div>
      <div>
        <h1 className="ml-14 font-bold">
          Recommended items({recommended?.length})
        </h1>
        <ul className="ml-14">
          {recommended.map((item) => (
            <li key={item.card.info.id}>
              → {item.card.info.name}{' '}
              <button
                className="mx-5 my-1 px-2 bg-green-100 rounded hover:bg-green-200"
                onClick={() => addFoodItem(item.card.info)}
              >
                Add item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
