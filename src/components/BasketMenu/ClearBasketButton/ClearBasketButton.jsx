import React, { useContext } from 'react';
import styled from 'styled-components';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { emptyBasket } from '../../../store/actions/checkout';

const ClearBasketButtonWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  background-color: white;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  color: #dc4848;
  font-weight: 600;
  text-decoration: none;
  width: 100%;
  padding: 10px;

  &:hover {
    color: #3d604c;
  }
`;

const ClearBasketButton = () => {
  const { dispatch } = useContext(CheckoutContext);

  return (
    <ClearBasketButtonWrapper onClick={() => dispatch(emptyBasket())}>
      <FontAwesomeIcon icon={faTrashAlt} size="1x" />
    </ClearBasketButtonWrapper>
  );
};

export default ClearBasketButton;
