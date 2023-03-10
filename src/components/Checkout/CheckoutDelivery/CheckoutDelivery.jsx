import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutCollectionForm from './CheckoutCollectionForm/CheckoutCollectionForm.jsx';
import CheckoutDeliveryForm from './CheckoutDeliveryForm/CheckoutDeliveryForm.jsx';
import CheckoutMethod from './CheckoutMethod/CheckoutMethod.jsx';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle.jsx';
import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { setDeliveryField } from '../../../store/actions/checkout';

const CheckoutDeliveryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const CheckoutDelivery = (props) => {
  const { nextStep } = props;
  const [selected, setSelected] = useState(null);
  const { dispatch } = useContext(CheckoutContext);

  const selectCollection = () => {
    dispatch(setDeliveryField('type', 'COLLECTION'));
    setSelected('COLLECTION');
  };

  const selectDelivery = () => {
    dispatch(setDeliveryField('type', 'DELIVERY'));
    setSelected('DELIVERY');
  };

  return (
    <CheckoutDeliveryWrapper>
      <CheckoutTitle>Select a delivery option</CheckoutTitle>
      <CheckoutMethod
        select={() => selectCollection()}
        isSelected={selected === 'COLLECTION'}
        title="Collection"
      />
      <CheckoutMethod
        select={() => selectDelivery()}
        isSelected={selected === 'DELIVERY'}
        title="Delivery"
      />
      <CheckoutCollectionForm
        isSelected={selected === 'COLLECTION'}
        nextStep={nextStep}
      />
      <CheckoutDeliveryForm
        isSelected={selected === 'DELIVERY'}
        nextStep={nextStep}
      />
    </CheckoutDeliveryWrapper>
  );
};

CheckoutDelivery.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutDelivery;
