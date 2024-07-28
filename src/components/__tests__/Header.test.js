import { render } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server';

test('logo should load on rendering header', () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded

  const logo = header.getAllByTestId('logo');
  expect(logo[0].src).toBe(
    'https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580'
  );
});

test('online status should be green on rendering header', () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if online status is green or not
  const onlineStatus = header.getByTestId('online-status');
  expect(onlineStatus.innerHTML).toBe('🟢');
});

test('cart should have 0 items on rendering header', () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check cart items are 0
  const cart = header.getByTestId('cart');
  expect(cart.innerHTML).toBe('Cart(0)');
});
