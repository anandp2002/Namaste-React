import { useState } from 'react';

// JSX => React.createElement => object => HTML(DOM)
//it is a JSX expression
//It is a react element
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
