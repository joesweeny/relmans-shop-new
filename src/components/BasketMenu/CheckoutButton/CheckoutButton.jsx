import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { CheckoutContext } from '../../../context/CheckoutContext.jsx';

const CheckoutButtonWrapper = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  background-color: #f1943c;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  color: #291212;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: green;
  }
`;

const CheckoutButton = (props) => {
  const { click } = props;
  const [total, setTotal] = useState(0);
  const { items } = useContext(CheckoutContext);

  useEffect(() => {
    const sum = items.reduce((prev, next) => prev + next.total, 0);
    setTotal(sum);
  }, [items]);

  return (
    <CheckoutButtonWrapper to="/checkout" onClick={() => click(false)}>
      Go To Checkout £{(total / 100).toFixed(2)}
    </CheckoutButtonWrapper>
  );
};

CheckoutButton.propTypes = {
  click: func.isRequired,
};

export default CheckoutButton;
