import React, { useContext, useEffect, useState } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import BasketItem from '../BasketItem/BasketItem';
import CheckoutButton from './CheckoutButton/CheckoutButton';
import ClearBasketButton from './ClearBasketButton/ClearBasketButton';
import { CheckoutContext } from '../../context/CheckoutContext.jsx';

const BasketMenuWrapper = styled.div`
  display: ${(props) => (props.open ? '-ms-flexbox' : 'none')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 60px);
  position: fixed;
  width: 100vw;
  background-color: #3d604c;
  transition: transform 300ms;
  right: 0;
  z-index: 1001;
  overflow-y: auto;

  @media (min-width: 756px) {
    width: 50vw;
    height: 100%;
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 450px;
  }
`;

const BasketMenu = (props) => {
  const { open, clickBasket } = props;
  const { items } = useContext(CheckoutContext);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(items);
  }, [items, setBasket]);

  if (basket.length === 0) {
    return (
      <BasketMenuWrapper open={open}>Your basket is empty</BasketMenuWrapper>
    );
  }

  return (
    <BasketMenuWrapper open={open}>
      <CheckoutButton click={clickBasket} />
      {basket.map((i) => {
        return (
          <BasketItem
            productId={i.productId}
            priceId={i.priceId}
            count={i.count}
            name={i.name}
            price={i.price}
            size={i.size}
            measurement={i.measurement}
            total={i.total}
            key={i.priceId}
          />
        );
      })}
      <ClearBasketButton />
    </BasketMenuWrapper>
  );
};

BasketMenu.propTypes = {
  open: bool.isRequired,
  clickBasket: func.isRequired,
};

export default BasketMenu;
