import React, { useContext } from 'react';
import styled from 'styled-components';

import CheckoutInput from '../CheckoutInput/CheckoutInput.jsx';
import { CheckoutContext } from '../../../../context/CheckoutContext.jsx';
import { setAddressField } from '../../../../store/actions/checkout';

const DeliveryAddressWrapper = styled.div`
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

const DeliveryAddress = () => {
  const { address, dispatch } = useContext(CheckoutContext);

  return (
    <DeliveryAddressWrapper>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setAddressField('line1', v))}
          type="text"
          label="Address Line 1*"
          width="97%"
          value={address.line1 ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setAddressField('line2', v))}
          type="text"
          label="Address Line 2"
          width="97%"
          value={address.line2 ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setAddressField('town', v))}
          type="text"
          label="Town*"
          width="97%"
          value={address.town ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={(v) => dispatch(setAddressField('county', v))}
          type="text"
          label="County*"
          width="95%"
          value={address.county ?? ''}
        />
        <CheckoutInput
          update={(v) => dispatch(setAddressField('postCode', v))}
          type="text"
          label="Post Code*"
          width="95%"
          value={address.postCode ?? ''}
        />
      </Row>
    </DeliveryAddressWrapper>
  );
};

export default DeliveryAddress;
