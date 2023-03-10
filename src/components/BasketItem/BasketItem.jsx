import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import BasketItemInfo from './BasketItemInfo/BasketItemInfo';
import BasketToggle from './BasketToggle/BasketToggle';
import image from '../../assets/fruitandveg.jpg';

const BasketItemWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;

  img {
    width: 70px;
    height: 70px;
  }
`;

const Total = styled.p`
  font-size: 16px;
  text-align: right;
  width: 50%;
  padding-right: 20px;
  color: #3d604c;
  font-weight: 600;
`;

const BasketItem = (props) => {
  const { name, price, priceId, productId, size, measurement, total } = props;

  return (
    <BasketItemWrapper>
      <img
        src={`https://relmans.s3.eu-west-2.amazonaws.com/products/${productId}.jpg`}
        alt={name}
      />
      <BasketItemInfo
        name={name}
        price={price}
        measurement={measurement}
        size={size}
      />
      <Total>£ {(total / 100).toFixed(2)}</Total>
      <BasketToggle
        productId={productId}
        priceId={priceId}
        name={name}
        price={price}
        size={size}
        measurement={measurement}
      />
    </BasketItemWrapper>
  );
};

BasketItem.propTypes = {
  productId: string.isRequired,
  priceId: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  measurement: string.isRequired,
  total: number.isRequired,
};

export default BasketItem;
