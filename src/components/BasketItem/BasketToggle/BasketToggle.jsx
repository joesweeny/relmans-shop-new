import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { addItem, removeItem } from '../../../store/actions/checkout';

const BasketToggleWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  border-left: 1px solid #cecbcbee;
  border-right: 1px solid #cecbcbee;
  background-color: #eeeeee;
  width: 30%;

  span {
    border-top: 1px solid #cecbcbee;
    border-bottom: 1px solid #cecbcbee;
    width: 100%;
    text-align: center;
  }
`;

const Button = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  font-size: 12px;
  padding: 5px;
  margin: 0;
  width: 100%;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #3d604c;
  }
`;

const BasketToggle = (props) => {
  const { productId, priceId, name, price, size, measurement } = props;
  const { items, dispatch } = useContext(CheckoutContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const c = items.find((obj) => obj.priceId === priceId) || null;
    setCount(c !== null ? c.count : 0);
  }, [items, priceId]);

  const add = () => {
    dispatch(addItem(priceId, productId, name, size, measurement, price));
  };

  const remove = () => {
    dispatch(removeItem(priceId, price));
  };

  return (
    <BasketToggleWrapper count={count}>
      <Button onClick={() => add()}>
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </Button>
      <span>{count}</span>
      <Button onClick={() => remove()}>
        <FontAwesomeIcon icon={faMinus} size="1x" />
      </Button>
    </BasketToggleWrapper>
  );
};

BasketToggle.propTypes = {
  productId: string.isRequired,
  priceId: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  measurement: string.isRequired,
};

export default BasketToggle;
