import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import CheckoutTitle from '../CheckoutTitle/CheckoutTitle.jsx';
import BasketItem from '../../BasketItem/BasketItem';
import { CheckoutContext } from '../../../context/CheckoutContext.jsx';

const OrderSummaryWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 35%;
    margin: 10px 10px 10px 15px;
    margin-bottom: auto;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  }
`;

const OrderSummary = () => {
  const { items } = useContext(CheckoutContext);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(items);
  }, [items, setBasket]);

  return (
    <OrderSummaryWrapper>
      <CheckoutTitle>Order Summary</CheckoutTitle>
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
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
