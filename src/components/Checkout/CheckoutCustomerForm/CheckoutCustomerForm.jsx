import React, { useContext } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CheckoutButton from '../CheckoutButton/CheckoutButton.jsx';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import DeliveryAddress from './DeliveryForm/DeliveryAddress.jsx';
import { CheckoutContext } from '../../../context/CheckoutContext.jsx';

const CheckoutCustomerFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #eeeeee;

  span {
    text-align: center;
    padding-bottom: 5px;
    font-size: 12px;
    color: #3d604c;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;

    span {
      padding-bottom: 10px;
      font-size: 14px;
    }
  }
`;

const CheckoutCustomerForm = (props) => {
  const { nextStep } = props;
  const { method, firstName, lastName, phone, email, address } =
    useContext(CheckoutContext);

  const isDisabled = () => {
    const mainFields = !firstName || !lastName || !email || !phone;

    if (method.type === 'COLLECTION') {
      return mainFields;
    }

    return (
      mainFields ||
      !address.line1 ||
      !address.town ||
      !address.county ||
      !address.postCode
    );
  };

  return (
    <CheckoutCustomerFormWrapper>
      <CheckoutTitle>Enter contact details</CheckoutTitle>
      <CheckoutButton
        click={() => nextStep((prev) => prev - 1)}
        color="#eeeeee"
        size="12px"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        Back to delivery
      </CheckoutButton>
      <span>Fields marked with a * need to be filled before proceeding</span>
      <ContactForm />
      {method.type === 'DELIVERY' ? <DeliveryAddress /> : null}
      {!isDisabled() ? (
        <CheckoutButton
          click={() => nextStep((prev) => prev + 1)}
          color="#f1943c"
          size="18px"
        >
          Proceed to payment
        </CheckoutButton>
      ) : null}
    </CheckoutCustomerFormWrapper>
  );
};

CheckoutCustomerForm.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutCustomerForm;
