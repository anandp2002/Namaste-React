import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => object => HTML(DOM)
// const heading1 = React.createElement(
//   'h1',
//   {
//     id: 'title',
//     key: 'h1',
//   },
//   'Hello world'
// );

// JSX => React.createElement => object => HTML(DOM)
//it is a JSX expression
//It is a react element
const heading = (
  <h1 id="title" key="h">
    Namaste React
  </h1>
);
const Title = () => {
  return (
    <h1 id="title" key="t">
      Namaste React fro Title
    </h1>
  );
};

var a = 10;

// React component
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {Title()}
      {a}
      <h1>h1 from HeaderComponent</h1>
      <h2>h2 from HeaderComponent</h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
// passing react element inside root
root.render(<HeaderComponent />);
