import { useDispatch } from 'react-redux';
import { IMG_CDN_URL } from '../config';
import { removeItem } from '../utils/cartSlice';
export const FoodItem = ({ imageId, name, description, price }) => {
  const dispatch = useDispatch();
  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };
  return (
    <div className="w-72 max-h-96 p-3 m-3 shadow-md rounded-xl ">
      <img
        className="mb-2 shadow-md rounded-lg w-72 h-48 object-cover"
        src={IMG_CDN_URL + imageId}
        alt=" Item image"
      />
      <h2 className="font-bold text-2md pb-1">{name}</h2>

      <h4>{description}</h4>
      <h4>{price / 100} ₹</h4>
      <button className="btn bg-red-200 p-2" onClick={() => handleRemove(name)}>
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
