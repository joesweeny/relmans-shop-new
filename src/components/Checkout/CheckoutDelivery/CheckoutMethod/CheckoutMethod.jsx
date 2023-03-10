import React from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';
import { faMale, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckoutMethodWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: ${(props) => (props.selected ? 'green' : 'white')};
  text-transform: uppercase;
  padding: 10px;
  color: ${(props) => (props.selected ? 'white' : '#3d604c')};
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  cursor: pointer;

  p {
    padding: 0 10px 0 10px;
  }
`;

const CheckoutMethod = (props) => {
  const { select, isSelected, title } = props;

  const icon = title === 'Collection' ? faMale : faShuttleVan;

  return (
    <CheckoutMethodWrapper selected={isSelected} onClick={() => select()}>
      <p>{title}</p>
      <FontAwesomeIcon icon={icon} size="1x" />
    </CheckoutMethodWrapper>
  );
};

CheckoutMethod.propTypes = {
  select: func.isRequired,
  isSelected: bool.isRequired,
  title: string.isRequired,
};

export default CheckoutMethod;
