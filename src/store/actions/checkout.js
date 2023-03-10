import * as actionTypes from './actionTypes';

export const emptyBasket = () => {
  return {
    type: actionTypes.EMPTY_BASKET,
  };
};

export const addItem = (priceId, productId, name, size, measurement, price) => {
  return {
    type: actionTypes.ADD_BASKET_ITEM,
    priceId,
    productId,
    name,
    size,
    measurement,
    price,
  };
};

export const removeItem = (priceId, price) => {
  return {
    type: actionTypes.REMOVE_BASKET_ITEM,
    priceId,
    price,
  };
};

export const setCustomerField = (key, value) => {
  return {
    type: actionTypes.SET_CUSTOMER_FIELD,
    key,
    value,
  };
};

export const setOrderNumber = (orderNumber) => {
  return {
    type: actionTypes.SET_ORDER_NUMBER,
    orderNumber,
  };
};

export const setDeliveryField = (key, value) => {
  return {
    type: actionTypes.SET_DELIVERY_FIELD,
    key,
    value,
  };
};

export const setAddressField = (key, value) => {
  return {
    type: actionTypes.SET_ADDRESS_FIELD,
    key,
    value,
  };
};

export const setOrderComplete = () => {
  return { type: actionTypes.SET_ORDER_COMPLETE };
};
