import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const CheckoutInputWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  label {
    color: #3d604c;
    font-size: 12px;
    font-weight: 600;
  }

  input {
    font-family: inherit;
    width: ${(props) => props.width};
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    padding: 5px;
    background: transparent;
    font-size: 16px;
  }
`;

const CheckoutInput = (props) => {
  const { label, type, value, update, width } = props;

  return (
    <CheckoutInputWrapper width={width}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => update(e.target.value)}
        width={width}
        id={label}
      />
    </CheckoutInputWrapper>
  );
};

CheckoutInput.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  value: string,
  update: func.isRequired,
  width: string.isRequired,
};

CheckoutInput.defaultProps = {
  value: '',
};

export default CheckoutInput;
