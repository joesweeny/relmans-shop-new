import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  faInfoCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InformationDisplayWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1025px) {
    width: 60%;
    flex-direction: row;
  }
`;

const Button = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  color: #3d604c;
  font-weight: 600;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-size: 18px;
  }
  &:hover {
    background-color: #f1943c;
  }

  @media (min-width: 1025px) {
    width: 48%;

    p {
      margin-left: 10px;
      font-size: 26px;
    }
  }
`;

const InformationButtons = () => {
  return (
    <InformationDisplayWrapper>
      <Button to="/about">
        <FontAwesomeIcon icon={faInfoCircle} size="2x" />
        <p>About Us</p>
      </Button>
      <Button to="/faq">
        <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
        <p>FAQ</p>
      </Button>
    </InformationDisplayWrapper>
  );
};

export default InformationButtons;
