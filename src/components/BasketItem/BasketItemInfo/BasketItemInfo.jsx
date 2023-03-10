import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import displayMeasurement from '../../../utility/measurement';

const BasketItemInfoWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 20px;
  width: 100%;

  padding: 0 5px 0 5px;

  p {
    font-size: 12px;
    text-align: left;
    font-weight: 600;
    color: #3d604c;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;

const PriceMeasurement = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Price = styled.span`
  font-size: 12px;

  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 5px 0 5px 0;
  }
`;

const Measurement = styled.span`
  font-size: 10px;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

const BasketItemInfo = (props) => {
  const { name, price, measurement, size } = props;

  return (
    <BasketItemInfoWrapper>
      <p>{name}</p>
      <PriceMeasurement>
        <Price>£ {(price / 100).toFixed(2)} / </Price>
        <Measurement>{displayMeasurement(measurement, size)}</Measurement>
      </PriceMeasurement>
    </BasketItemInfoWrapper>
  );
};

BasketItemInfo.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  measurement: string.isRequired,
  size: number.isRequired,
};

export default BasketItemInfo;
