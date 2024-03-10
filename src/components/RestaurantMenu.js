import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, recommended] = useRestaurant(resId);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-item">
      <div>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}></img>
        <p>{restaurant.areaName}</p>
        <h3>{restaurant.city}</h3>
        <h4>{restaurant.avgRating} stars</h4>
        <h5>{restaurant.costForTwoMessage}</h5>
      </div>
      <div>
        <h1>Recommended items({recommended?.length})</h1>
        <ul>
          {recommended.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
