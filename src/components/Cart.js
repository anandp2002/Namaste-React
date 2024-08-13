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
      <h2 className="font-bold mt-32 text-center">Your cart is empty !</h2>
    );
  }

  return (
    <div className="mt-32">
      <div className="flex flex-wrap justify-around">
        <h1 className="font-bold">Total quantity ({totalQuantity})</h1>
        <h1 className="font-bold">
          Total Amount: ₹ {totalAmount.toFixed(2) / 100}
        </h1>
        <button
          className="btn bg-red-200 rounded-md p-2 m-5"
          onClick={() => handleClearCart()}
        >
          Clear cart
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <div key={item.id} className="m-2 p-2 border rounded-md">
            <FoodItem {...item} />
            <div className="flex justify-around items-center mt-2">
              <button
                className="btn bg-red-300 rounded-md px-3"
                onClick={() => handleRemoveItem(item.id)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="btn bg-green-300 rounded-md px-3"
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
