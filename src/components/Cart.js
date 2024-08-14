import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart, removeItem, addItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <h2 className="font-bold text-2xl text-center mt-32 text-gray-600">
        Your cart is empty!
      </h2>
    );
  }

  return (
    <div className="mt-10 py-6 min-h-screen">
      <div className="sticky top-16 py-8 shadow-sm flex flex-col sm:flex-row justify-around items-center mb-8 bg-stone-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Total Quantity: {totalQuantity}
        </h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Total Amount: ₹ {totalAmount.toFixed(2) / 100}
        </h1>
        <button
          className="bg-red-500 text-white px-4 ml-20 py-2 rounded-md hover:bg-red-600 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-wrap justify-center ">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-80 p-4 m-2 bg-white shadow-md rounded-lg flex flex-col items-center"
          >
            <FoodItem {...item} />
            <div className="flex justify-center items-center w-full mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition mx-2"
                onClick={() => handleRemoveItem(item.id)}
              >
                -
              </button>

              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md transition mx-2"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
