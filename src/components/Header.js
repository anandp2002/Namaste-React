import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Title = () => {
  return (
    <a href="/">
      <div className="header">
        <img
          className="logo"
          alt="logo-image"
          src="https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580"
        />
        <h1 style={{ paddingLeft: '20px' }}>Foodie</h1>
      </div>
    </a>
  );
};

// React component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
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
