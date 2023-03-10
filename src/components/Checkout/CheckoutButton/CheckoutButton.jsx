import React from 'react';
import styled from 'styled-components';
import { func, node, string } from 'prop-types';

const CheckoutButtonWrapper = styled.p`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  text-transform: uppercase;
  padding: 10px;
  color: #291212;
  font-weight: 600;
  font-size: ${(props) => props.size};
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;

const CheckoutButton = (props) => {
  const { children, click, color, size } = props;

  return (
    <CheckoutButtonWrapper color={color} onClick={() => click()} size={size}>
      {children}
    </CheckoutButtonWrapper>
  );
};

CheckoutButton.propTypes = {
  children: node.isRequired,
  click: func.isRequired,
  color: string.isRequired,
  size: string.isRequired,
};

export default CheckoutButton;
