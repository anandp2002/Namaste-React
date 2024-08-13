import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export const Title = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        data-testid="logo"
        className="h-10"
        alt="logo-image"
        src="https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580"
      />
      <span className="ml-2 text-xl font-bold text-gray-800">Swiggy</span>
    </Link>
  );
};

// React component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-stone-50 fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Title />
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                to="/instamart"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Instamart
              </Link>
              <span data-testid="online-status" className="px-3 py-2 text-sm">
                {isOnline ? '🟢' : '🔴'}
              </span>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
              >
                Cart ({cartItems.length})
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <h1 className="text-orange-400 font-bold">{user.name}</h1>
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
              >
                Login
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16m-7 6h7'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/instamart"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Instamart
            </Link>
            <span
              data-testid="online-status"
              className="block px-3 py-2 text-base font-medium"
            >
              {isOnline ? '🟢' : '🔴'}
            </span>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
            >
              Cart ({cartItems.length})
            </Link>
          </div>
          <div className="px-5 py-3 border-t border-gray-200 flex justify-between">
            <h1 className="text-orange-400 font-bold">{user.name}</h1>
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
