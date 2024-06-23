import { IMG_CDN_URL } from '../config';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-72 h-80 p-3 m-3 shadow-md rounded-xl ">
      <img
        className="mb-2 shadow-md rounded-lg w-72 h-48 object-cover"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-2md pb-1">{name}</h2>
      <p>{cuisines?.join(', ')}</p>
      <h4>{avgRating} stars</h4>
      <h4>{user.name}</h4>
    </div>
  );
};

export default RestaurantCard;
