import { IMG_CDN_URL } from '../config';
export const FoodItem = ({ imageId, name, price, quantity }) => {
  return (
    <div className="w-72 max-h-96 p-3 m-3 shadow-md rounded-xl ">
      <img
        className="mb-2 shadow-md rounded-lg w-72 h-48 object-cover"
        src={IMG_CDN_URL + imageId}
        alt=" Item image"
      />
      <h2 className="font-bold text-2md pb-1">{name}</h2>
      <h4>{(quantity * price) / 100} ₹</h4>
    </div>
  );
};

export default FoodItem;
