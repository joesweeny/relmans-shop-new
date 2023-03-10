import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';

import reducer from '../store/reducers/checkout';
import { createOrder } from '../gateway/client';
import { setOrderNumber } from '../store/actions/checkout';

export const CheckoutContext = createContext(null);

const CheckoutContextProvider = (props) => {
  const initialState = {
    orderNumber: null,
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    address: {
      line1: null,
      line2: null,
      town: null,
      county: null,
      postCode: null,
    },
    method: {
      type: null,
      date: null,
      fee: 0,
    },
    items: [],
  };

  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const createNewOrder = (orderNumber) => {
    const items = state.items.map((i) => {
      return {
        productId: i.productId,
        priceId: i.priceId,
        price: i.price,
        quantity: i.count,
      };
    });

    const date = new Date(state.method.date);

    if (state.method.type === 'DELIVERY') {
      date.setHours(date.getHours() + 1);
    }

    const payload = {
      ...state,
      orderNumber,
      method: {
        ...state.method,
        date: date.toISOString(),
      },
      items,
    };

    dispatch(setOrderNumber(orderNumber));

    createOrder(payload).catch((e) => console.log(e));
  };

  const store = {
    orderNumber: state.orderNumber,
    firstName: state.firstName,
    lastName: state.lastName,
    phone: state.phone,
    email: state.email,
    address: state.address,
    method: state.method,
    items: state.items,
    dispatch,
    createNewOrder,
  };

  return (
    <CheckoutContext.Provider value={store}>
      {children}
    </CheckoutContext.Provider>
  );
};

CheckoutContextProvider.propTypes = {
  children: node.isRequired,
};

export default CheckoutContextProvider;
