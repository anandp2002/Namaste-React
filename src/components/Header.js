import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export const Title = () => {
  return (
    <Link to="/">
      <img
        data-testid="logo"
        className="h-10 mt-3"
        alt="logo-image"
        src="https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580"
      />
    </Link>
  );
};

// React component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-stone-50 px-5">
      <Title />
      <div className="nav-items">
        <ul className="flex py-5">
          <Link to="/">
            <li className="px-3">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-3">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-3">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-3">Instamart</li>
          </Link>
          <li data-testid="online-status">{isOnline ? '🟢' : '🔴'}</li>
          <Link to="/cart">
            <li data-testid="cart" className="px-3">
              Cart({cartItems.length})
            </li>
          </Link>
        </ul>
      </div>
      <h1 className="text-orange-400 font-bold mt-12">{user.name}</h1>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
