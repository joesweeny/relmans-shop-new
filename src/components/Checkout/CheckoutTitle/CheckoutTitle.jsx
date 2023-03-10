import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const CheckoutTitleWrapper = styled.p`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  text-transform: uppercase;
  padding: 10px;
  color: #3d604c;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid #cecbcbee;
  width: 100%;
`;

const CheckoutTitle = (props) => {
  const { children } = props;

  return <CheckoutTitleWrapper>{children}</CheckoutTitleWrapper>;
};

CheckoutTitle.propTypes = {
  children: string.isRequired,
};

export default CheckoutTitle;
