import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold">Cart items ({cartItems.length})</h1>
      <button
        className="btn bg-red-300 rounded-md p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
