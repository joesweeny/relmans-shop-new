import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import CheckoutTitle from '../CheckoutTitle/CheckoutTitle.jsx';
import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { setOrderComplete } from '../../../store/actions/checkout';

const CheckoutSuccessWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;
  color: #3d604c;
  font-weight: 600;

  div {
    padding: 10px;
    font-size: 14px;
    text-align: center;

    span {
      color: #f1943c;
    }
  }
`;

const OrderNumber = styled.p`
  width: 100;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  padding: 10px;
  color: #f1943c;
`;

const CheckoutSuccess = () => {
  const { orderNumber, email, dispatch } = useContext(CheckoutContext);

  useEffect(() => {
    dispatch(setOrderComplete());
  }, [dispatch]);

  return (
    <CheckoutSuccessWrapper>
      <CheckoutTitle>Order Confirmation</CheckoutTitle>
      <div>Your order number is:</div>
      <OrderNumber>{orderNumber}</OrderNumber>
      <div>
        Thank you for your order. An email confirmation has been sent to {email}
        . Our team will review your order and once accepted you will receive a
        follow up confirmation email.
      </div>
      <div>
        In the meantime if you have any questions please do not hesitate to
        email us at orders@relmans.co.uk or call us on 01207 505001.
      </div>
    </CheckoutSuccessWrapper>
  );
};

export default CheckoutSuccess;
