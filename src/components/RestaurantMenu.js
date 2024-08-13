import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import useRestaurant from '../utils/useRestaurant';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import ShimmerMenu from './ShimmerMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, recommended] = useRestaurant(resId);

  // Get cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Get the quantity of an item in the cart
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="flex flex-col items-center p-6 sm:p-10 bg-gray-50 min-h-screen mt-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center p-6 border-b">
          <img
            className="w-32 h-32 object-cover rounded-lg shadow-md"
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt={restaurant.name}
          />
          <div className="mt-4 sm:mt-0 sm:ml-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {restaurant.name}
            </h1>
            <p className="text-gray-600">
              {restaurant.areaName}, {restaurant.city}
            </p>
            <p className="text-yellow-500 font-semibold mt-2">
              {restaurant.avgRating} ★
            </p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5">
            Recommended Items ({recommended?.length})
          </h2>
          <ul className="space-y-4">
            {recommended.map((item) => (
              <li
                key={item.card.info.id}
                className="flex flex-col sm:flex-row justify-between items-center p-3 border rounded-md bg-white shadow hover:bg-gray-100 transition"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <span className="text-lg font-medium text-gray-700">
                    {item.card.info.name}
                  </span>
                  <span className="text-gray-500 ml-0 sm:ml-4 mt-1 sm:mt-0">
                    ₹ {item.card.info.price / 100}
                  </span>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  {getItemQuantity(item.card.info.id) > 0 ? (
                    <>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-l-md shadow hover:bg-red-600 transition"
                        onClick={() => handleRemoveItem(item.card.info.id)}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 bg-white border border-swiggy-orange text-swiggy-orange">
                        {getItemQuantity(item.card.info.id)}
                      </span>
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-r-md shadow hover:bg-green-600 transition"
                        onClick={() => handleAddItem(item.card.info)}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      className="bg-orange-400 text-white px-4 py-2 rounded-md shadow hover:bg-swiggy-orange transition"
                      onClick={() => handleAddItem(item.card.info)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
