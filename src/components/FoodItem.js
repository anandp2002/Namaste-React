import { IMG_CDN_URL } from '../config';

export const FoodItem = ({ imageId, name, price, quantity }) => {
  return (
    <div className="w-72 max-w-xs p-4 m-4 shadow-lg rounded-xl bg-white overflow-hidden">
      <img
        className="w-full h-48 object-cover rounded-lg mb-4"
        src={IMG_CDN_URL + imageId}
        alt={name}
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-600">
          {(quantity * price) / 100} ₹
        </h4>
        <span className="text-sm text-gray-500">Qty: {quantity}</span>
      </div>
    </div>
  );
};

export default FoodItem;
