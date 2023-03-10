import React, { useState } from 'react';
import styled from 'styled-components';

import CheckoutDelivery from '../CheckoutDelivery/CheckoutDelivery.jsx';
import CheckoutCustomerForm from '../CheckoutCustomerForm/CheckoutCustomerForm.jsx';
import CheckoutPayment from '../CheckoutPayment/CheckoutPayment.jsx';
import CheckoutSuccess from '../CheckoutSuccess/CheckoutSuccess.jsx';

const CheckoutFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 10px;

  @media (min-width: 1024px) {
    width: 35%;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const CheckoutForm = () => {
  const [step, setStep] = useState(1);

  let component;

  switch (step) {
    case 1:
      component = <CheckoutDelivery nextStep={setStep} />;
      break;
    case 2:
      component = <CheckoutCustomerForm nextStep={setStep} />;
      break;
    case 3:
      component = <CheckoutPayment nextStep={setStep} />;
      break;
    case 4:
      component = <CheckoutSuccess />;
      break;
    default:
      component = null;
      break;
  }

  return <CheckoutFormWrapper>{component}</CheckoutFormWrapper>;
};

export default CheckoutForm;
