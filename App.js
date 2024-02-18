import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX => React.createElement => object => HTML(DOM)
//it is a JSX expression
//It is a react element
const Title = () => {
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
    </div>
  );
};

const restaurantList = [
  {
    id: 1,
    name: 'Burger King',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bctdwc5fvuq8kavblss3',
    cusines: ['Burgers', 'American'],
    rating: '4.2',
  },
  {
    id: 2,
    name: 'Trichur Towers',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/82b5e476dec490add67aaba583e9a99f',
    cusines: ['Chinese', 'North Indian'],
    rating: '4.3',
  },
  {
    id: 3,
    name: 'Alibaba Dishes',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dkgxewamr6gh9bmngnoh',
    cusines: ['Chinese', 'Kebabs'],
    rating: '4.0',
  },
  {
    id: 4,
    name: 'Soofi Mandi',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ez70siznnd9x74py3v4x',
    cusines: ['Arabian', 'M Eastern'],
    rating: '4.3',
  },
  {
    id: 5,
    name: "Thomson's Casa",
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g7ausfcdmu0nwyf4kkxe',
    cusines: ['Chinese', 'Indian'],
    rating: '4.0',
  },
  {
    id: 6,
    name: 'Hotel Akshaya',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mko07sgx8v9t3zmvllmb',
    cusines: ['Chinese', 'South Indian'],
    rating: '3.9',
  },
  {
    id: 7,
    name: 'Alankar hot',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0ec4a3aa773f6a64d7d111219c2271c',
    cusines: ['Chinese', 'North Indian'],
    rating: '4.3',
  },
  {
    id: 8,
    name: 'Madurai Hotel',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lejebjke2kgchrmcgwwa',
    cusines: ['American', 'Indian'],
    rating: '4.7',
  },
  {
    id: 9,
    name: 'Uptown',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a1743e44d1bffc620f7b4a18b474c424',
    cusines: ['Grill', 'Indian'],
    rating: '4.1',
  },
  {
    id: 10,
    name: 'Thajine Rice',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lpgsthwsml4f9qgk1sqs',
    cusines: ['Arabian', 'Bhiriyani'],
    rating: '4.4',
  },
];

const RestaurantCard = ({ image, name, cusines, rating }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(', ')}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} {...restaurant} />;
      })}
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <h3>Footer</h3>
    </div>
  );
};

const AppLayout = () => {
  return (
    // <></> is same as <React.Fragment></React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
root.render(<AppLayout />);
