import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo.jsx';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3d604c;
  height: 60px;
  width: 100vw;
  font-size: 16px;
  position: fixed;
  z-index: 1500;

  div {
    margin-right: 40px;
    margin-left: 20px;
  }

  svg {
    cursor: pointer;
    margin-left: 25px;
    margin-right: 25px;

    &:hover {
      transform: scale(1.3);
    }
  }

  @media (min-width: 758px) {
    height: 80px;
    font-size: 20px;

    div {
      margin-right: 60px;
      margin-left: 30px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const Toolbar = (props) => {
  const { basketOpen, clickBasket, clickMenu, menuOpen } = props;
  // const { items } = useContext(CheckoutContext);
  const { innerWidth } = window;

  const toggleMenu = () => {
    clickMenu(!menuOpen);

    if (innerWidth < 959) {
      clickBasket(false);
    }
  };

  const toggleBasket = () => {
    clickBasket(!basketOpen);

    if (innerWidth < 959) {
      clickMenu(false);
    }
  };

  // const total = items.reduce((prev, next) => prev + next.count, 0);

  return (
    <ToolbarWrapper>
      <FontAwesomeIcon
        color={menuOpen ? '#f1943c' : '#ffffff'}
        icon={faBars}
        size="2x"
        onClick={() => toggleMenu()}
      />
      <Logo clickBasket={clickBasket} clickMenu={clickMenu} />
      <div
        onClick={() => toggleBasket()}
        onKeyDown={() => toggleBasket()}
        role="button"
        tabIndex={0}
      >
      </div>
    </ToolbarWrapper>
  );
};

Toolbar.propTypes = {
  basketOpen: bool.isRequired,
  clickBasket: func.isRequired,
  menuOpen: bool.isRequired,
  clickMenu: func.isRequired,
};

export default Toolbar;
