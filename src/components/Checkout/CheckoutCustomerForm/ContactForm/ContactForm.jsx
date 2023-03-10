import React, { useContext } from 'react';
import styled from 'styled-components';

import CheckoutInput from '../CheckoutInput/CheckoutInput.jsx';
import { CheckoutContext } from '../../../../context/CheckoutContext.jsx';
import { setCustomerField } from '../../../../store/actions/checkout';

const ContactFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #eeeeee;
  padding: 0 10px 10px 10px;
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    padding: 10px 30px 10px 30px;
  }
`;

const ContactForm = () => {
  const { firstName, lastName, phone, email, dispatch } =
    useContext(CheckoutContext);

  return (
    <ContactFormWrapper>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setCustomerField('firstName', v))}
          type="text"
          label="First Name*"
          width="95%"
          value={firstName ?? ''}
        />
        <CheckoutInput
          update={(v) => dispatch(setCustomerField('lastName', v))}
          type="text"
          label="Last Name*"
          width="95%"
          value={lastName ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setCustomerField('phone', v))}
          type="text"
          label="Phone Number*"
          width="97%"
          value={phone ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setCustomerField('email', v))}
          type="email"
          label="Email Address*"
          width="97%"
          value={email ?? ''}
        />
      </Row>
    </ContactFormWrapper>
  );
};

export default ContactForm;
