import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import ProductToggle from './ProductToggle/ProductToggle.jsx';
import displayMeasurement from '../../utility/measurement';
import image from '../../assets/fruitandveg.jpg';

const ProductWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  margin: 10px 5px 5px 5px;
  font-size: 12px;
  width: 150px;
  border-radius: 0 0 10px 10px;

  img {
    width: 175px;
    height: 125px;
  }

  @media (min-width: 959px) {
    margin: 15px 5px 5px 5px;
    font-size: 16px;
    width: 250px;

    img {
      width: 250px;
      height: 200px;
    }
  }

  @media (min-width: 1025px) {
    margin: 25px 5px 5px 5px;
    font-size: 16px;
    width: 300px;

    img {
      width: 300px;
      height: 250px;
    }
  }
`;

const Title = styled.p`
  text-align: center;
  background-color: #ffffff;
  padding: 5px;
  color: #3d604c;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  border-radius: 10px 10px 0 0;
`;

const PriceMeasurementStatus = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  @media (min-width: 1025px) {
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
`;

const PriceMeasurement = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: center;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #cecbcbee;
  background-color: #ffffff;
  width: 100%;
`;

const Price = styled.span`
  padding: 5px;
  color: #3d604c;
  font-weight: 600;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 22px;
    padding: 10px;
  }
`;

const Measurement = styled.span`
  color: black;
  font-weight: 600;
  font-size: 10px;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const Status = styled.div`
  text-align: center;
  background-color: #ffffff;
  color: ${(props) => (props.status === 'IN_STOCK' ? 'green' : 'red')};
  font-weight: 600;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Product = (props) => {
  const { id, priceId, measurement, name, size, status, price } = props;

  return (
    <ProductWrapper>
      <Title>{name}</Title>
      <img
        src={`https://relmans.s3.eu-west-2.amazonaws.com/products/${id}.jpg`}
        alt={name}
      />
      <PriceMeasurementStatus>
        <PriceMeasurement>
          <Price>£ {(price / 100).toFixed(2)}</Price>
          <Measurement>/ {displayMeasurement(measurement, size)}</Measurement>
        </PriceMeasurement>
        <Status status={status}>{status.replace(/[_-]/g, ' ')}</Status>
      </PriceMeasurementStatus>
      <ProductToggle
        productId={id}
        priceId={priceId}
        name={name}
        price={price}
        size={size}
        status={status}
        measurement={measurement}
      />
    </ProductWrapper>
  );
};

Product.propTypes = {
  id: string.isRequired,
  priceId: string.isRequired,
  name: string.isRequired,
  status: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  measurement: string.isRequired,
};

export default Product;
