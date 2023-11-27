import * as actionTypes from '../actions/actionTypes';
import addSortItem from '../../utility/basket';

const addItem = (state, action) => {
  const item = state.items.find((i) => i.priceId === action.priceId) || null;
  const items = state.items.filter((i) => i.priceId !== action.priceId);

  const newItem = {
    priceId: action.priceId,
    productId: action.productId,
    name: action.name,
    size: action.size,
    measurement: action.measurement,
    price: action.price,
    total: item === null ? action.price : (item.total += action.price),
    count: item === null ? 1 : (item.count += 1),
  };

  return {
    ...state,
    items: addSortItem(items, newItem),
  };
};

const removeItem = (state, action) => {
  const item = state.items.find((i) => i.priceId === action.priceId) || null;
  const items = state.items.filter((i) => i.priceId !== action.priceId);

  if (item === null || item.count === 1) {
    return {
      ...state,
      items: [...items],
    };
  }

  const newItem = {
    ...item,
    total: (item.total -= item.price),
    count: (item.count -= 1),
  };

  return {
    ...state,
    items: addSortItem(items, newItem),
  };
};

const setCustomerField = (state, action) => {
  return {
    ...state,
    [action.key]: action.value,
  };
};

const setOrderNumber = (state, action) => {
  return {
    ...state,
    orderNumber: action.orderNumber,
  };
};

const setDeliveryField = (state, action) => {
  const { method } = state;

  return {
    ...state,
    method: {
      ...method,
      [action.key]: action.value,
    },
  };
};

const setAddressField = (state, action) => {
  const { address } = state;

  return {
    ...state,
    address: {
      ...address,
      [action.key]: action.value,
    },
  };
};

const resetState = (state, action) => {
  return {
    orderNumber: state.orderNumber,
    items: [],
    firstName: null,
    lastName: null,
    phone: null,
    email: state.email,
    address: {
      line1: null,
      line2: null,
      line3: null,
      town: null,
      county: null,
      postCode: null,
    },
    method: {
      type: null,
      date: null,
      fee: 0,
    },
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.EMPTY_BASKET:
      return {
        ...state,
        items: [],
      };
    case actionTypes.ADD_BASKET_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_BASKET_ITEM:
      return removeItem(state, action);
    case actionTypes.SET_CUSTOMER_FIELD:
      return setCustomerField(state, action);
    case actionTypes.SET_ORDER_NUMBER:
      return setOrderNumber(state, action);
    case actionTypes.SET_DELIVERY_FIELD:
      return setDeliveryField(state, action);
    case actionTypes.SET_ADDRESS_FIELD:
      return setAddressField(state, action);
    case actionTypes.SET_ORDER_COMPLETE:
      return resetState(state, action);
    default:
      return state;
  }
};

export default reducer;
