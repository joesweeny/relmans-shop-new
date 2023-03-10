import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import CheckoutButton from '../../CheckoutButton/CheckoutButton.jsx';
import CheckoutDate from '../CheckoutDate/CheckoutDate.jsx';
import PostcodeValidation from './PostcodeValidation/PostcodeValidation.jsx';
import { CheckoutContext } from '../../../../context/CheckoutContext.jsx';
import { setDeliveryField } from '../../../../store/actions/checkout';

const CheckoutDeliveryFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  background-color: #eeeeee;
`;

const Info = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background-color: #eeeeee;
  padding: 10px 0 0 0;

  span {
    font-size: 14px;
    color: #3d604c;
    font-weight: 600;
    margin: 5px 0 5px 0;
  }
`;

const CheckoutDeliveryForm = (props) => {
  const { isSelected, nextStep } = props;
  const { method, address, dispatch } = useContext(CheckoutContext);
  const [isValid, setIsValid] = useState(address.postCode !== null);

  return (
    <CheckoutDeliveryFormWrapper>
      {!isValid && isSelected ? (
        <PostcodeValidation isValid={setIsValid} />
      ) : null}
      {isValid && isSelected ? (
        <Info>
          <span>Please select a date for delivery.</span>
          <span>
            We deliver Tuesday to Saturday between 11am and 2pm and accept
            orders up to one week in advance
          </span>
          <CheckoutDate
            isCollection={false}
            selectedDate={method.date}
            setSelectedDate={(d) => dispatch(setDeliveryField('date', d))}
          />
          {method.date ? (
            <CheckoutButton
              click={() => nextStep(2)}
              color="#f1943c"
              size="18px"
            >
              Proceed to contact details
            </CheckoutButton>
          ) : null}
        </Info>
      ) : null}
    </CheckoutDeliveryFormWrapper>
  );
};

CheckoutDeliveryForm.propTypes = {
  isSelected: bool.isRequired,
  nextStep: func.isRequired,
};

export default CheckoutDeliveryForm;
