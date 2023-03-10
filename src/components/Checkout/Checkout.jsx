import React from 'react';
import styled from 'styled-components';

import CheckoutForm from './CheckoutForm/CheckoutForm.jsx';

const CheckoutWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    margin: 30px 10px 20px 10px;
  }
`;

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <CheckoutForm />
    </CheckoutWrapper>
  );
};

export default Checkout;
