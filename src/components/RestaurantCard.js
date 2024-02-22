import { IMG_CDN_URL } from '../config';

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines?.join(', ')}</p>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
