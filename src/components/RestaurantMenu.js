import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, RES_DETAILS } from '../config';
import Shimmer from './Shimmer';

function checkJsonData(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    let checkData = jsonData?.data?.cards[i]?.card?.card?.info;

    if (checkData !== undefined) {
      return checkData;
    }
  }
}

function checkRecommended(jsonData) {
  for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    let RecommendedList =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]
        ?.card?.card?.itemCards;

    if (RecommendedList !== undefined) {
      return RecommendedList;
    }
  }
}

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RES_DETAILS + resId);
    const json = await data.json();
    let result = checkJsonData(json);
    setRestaurant(result);

    let recommendedItems = checkRecommended(json);
    setRecommended(recommendedItems);
  }

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
