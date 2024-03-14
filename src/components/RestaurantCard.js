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
    <div className="card w-72 p-3 m-3 shadow-md rounded-xl">
      <img
        className="shadow-md rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-2md">{name}</h2>
      <p>{cuisines?.join(', ')}</p>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
