import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';
import brand from '../../assets/relmanslogo.png';

const LogoWrapper = styled.img`
  max-width: 150px;
  padding: 10px;

  @media (min-width: 758px) {
    max-width: 200px;
  }
`;

const Logo = (props) => {
  const { clickBasket, clickMenu } = props;

  const onClick = () => {
    clickBasket(false);
    clickMenu(false);
  };

  return (
    <NavLink to="/" onClick={() => onClick()}>
      <LogoWrapper src={brand} />
    </NavLink>
  );
};

Logo.propTypes = {
  clickBasket: func.isRequired,
  clickMenu: func.isRequired,
};

export default Logo;
