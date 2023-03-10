import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CheckoutButton from '../../../CheckoutButton/CheckoutButton.jsx';
import { CheckoutContext } from '../../../../../context/CheckoutContext.jsx';
import { setAddressField } from '../../../../../store/actions/checkout';
import isPostCodeValid from '../../../../../utility/checkout';

const PostcodeValidationWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  padding: 10px 0 20px 0;
  color: #3d604c;
  font-size: 16px;
  font-weight: 600;

  input {
    font-family: inherit;
    width: 50%;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    padding: 5px;
    background: transparent;
    font-size: 20px;
    text-align: center;
    color: #3d604c;
    font-weight: 600;
    margin: 10px 0 10px 0;
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  text-align: center;
  color: red;
  padding: 10px;
`;

const SuccessMessage = styled.p`
  width: 100%;
  text-align: center;
  color: green;
  padding: 10px;

  svg {
    margin-left: 10px;
  }
`;

const PostcodeValidation = (props) => {
  const { isValid } = props;
  const [postCode, setPostCode] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useContext(CheckoutContext);

  const validate = () => {
    if (!isPostCodeValid(postCode)) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(true);

    setTimeout(() => {
      dispatch(setAddressField('postCode', postCode.toUpperCase()));
      isValid(true);
    }, 2000);
  };

  return (
    <PostcodeValidationWrapper>
      <p>Please enter your postcode to check for delivery:</p>
      <input
        type="text"
        onChange={(e) => setPostCode(e.target.value)}
        value={postCode}
      />
      <CheckoutButton click={() => validate()} color="green" size="18px">
        Check
      </CheckoutButton>
      {error ? (
        <ErrorMessage>Sorry we do not deliver to your post code</ErrorMessage>
      ) : null}
      {success ? (
        <SuccessMessage>
          We deliver to your area
          <FontAwesomeIcon icon={faThumbsUp} size="1x" />
        </SuccessMessage>
      ) : null}
    </PostcodeValidationWrapper>
  );
};

PostcodeValidation.propTypes = {
  isValid: func.isRequired,
};

export default PostcodeValidation;
