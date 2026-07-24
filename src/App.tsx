import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import CategoryContextProvider from './context/CategoryContext';
import CheckoutContextProvider from './context/CheckoutContext';
import Dashboard from './components/Dashboard/Dashboard';
import Toolbar from './components/Toolbar/Toolbar';
import MaintenanceModal from './components/MaintenanceModal/MaintenanceModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <CategoryContextProvider>
      <CheckoutContextProvider>
        <MaintenanceModal />
        <Container>
          <BrowserRouter>
            <Toolbar
              basketOpen={basketOpen}
              menuOpen={menuOpen}
              clickBasket={setBasketOpen}
              clickMenu={setMenuOpen}
            />
            <Dashboard
              basketOpen={basketOpen}
              menuOpen={menuOpen}
              clickMenu={setMenuOpen}
              clickBasket={setBasketOpen}
            />
          </BrowserRouter>
        </Container>
      </CheckoutContextProvider>
    </CategoryContextProvider>
  );
};

export default App;
