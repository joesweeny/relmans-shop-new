import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import DeliveryTotal from './DeliveryTotal/DeliveryTotal.jsx';

const PaymentTotalWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  font-size: 60px;
  padding: 20px 10px 30px 10px;
  text-align: center;
  color: #3d604c;

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const PaymentTotal = (props) => {
  const { fee, total, type } = props;

  return (
    <PaymentTotalWrapper>
      {type === 'COLLECTION' ? (
        <p>£{(total / 100).toFixed(2)}</p>
      ) : (
        <DeliveryTotal fee={fee} total={total} />
      )}
    </PaymentTotalWrapper>
  );
};

PaymentTotal.propTypes = {
  fee: number.isRequired,
  total: number.isRequired,
  type: string.isRequired,
};

export default PaymentTotal;
