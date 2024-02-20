import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
