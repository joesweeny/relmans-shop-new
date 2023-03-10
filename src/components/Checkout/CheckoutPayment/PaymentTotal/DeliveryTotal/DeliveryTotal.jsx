import React from 'react';
import styled from 'styled-components';
import { number } from 'prop-types';

const DeliveryDisplayWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  text-align: center;
  color: #3d604c;

  span {
    font-size: 60px;
    margin-bottom: 10px;
  }

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const DeliveryFeeDisplay = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  width: 100%;
  text-align: center;

  p {
    font-size: 14px;
    padding-top: 10px;
    color: black;
  }
`;

const DeliveryTotal = (props) => {
  const { fee, total } = props;

  return (
    <DeliveryDisplayWrapper>
      {total >= 2500 ? (
        <p>£{(total / 100).toFixed(2)}</p>
      ) : (
        <DeliveryFeeDisplay>
          <span>£{((total + fee) / 100).toFixed(2)}</span>
          <p>
            £{(total / 100).toFixed(2)} + £{(fee / 100).toFixed(2)} delivery
          </p>
          <p>
            Spend <b>£{((2500 - total) / 100).toFixed(2)}</b> more to qualify
            for free delivery
          </p>
        </DeliveryFeeDisplay>
      )}
    </DeliveryDisplayWrapper>
  );
};

DeliveryTotal.propTypes = {
  fee: number.isRequired,
  total: number.isRequired,
};

export default DeliveryTotal;
