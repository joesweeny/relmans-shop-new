import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import BasketMenu from '../BasketMenu/BasketMenu';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import Routing from '../Routes/Routes.jsx';
import ProductContextProvider from '../../context/ProductContext.jsx';

const DashboardWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-top: 60px;

  @media (min-width: 758px) {
    margin-top: 80px;
  }
`;

const Dashboard = (props) => {
  const { basketOpen, menuOpen, clickMenu, clickBasket } = props;

  return (
    <ProductContextProvider>
      <DashboardWrapper>
        <CategoryMenu open={menuOpen} click={clickMenu} />
        <Routing />
        <BasketMenu open={basketOpen} clickBasket={clickBasket} />
      </DashboardWrapper>
    </ProductContextProvider>
  );
};

Dashboard.propTypes = {
  basketOpen: bool.isRequired,
  menuOpen: bool.isRequired,
  clickMenu: func.isRequired,
  clickBasket: func.isRequired,
};

export default Dashboard;
