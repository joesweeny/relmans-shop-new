import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import AboutUs from '../AboutUs/AboutUs';
import Category from '../Category/Category';
import Checkout from '../Checkout/Checkout.jsx';
import FAQ from '../FAQ/FAQ.jsx';
import Home from '../Home/Home.jsx';

const RoutesWrapper = styled.div`
  flex: 1;
`;

const Routing = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <RoutesWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </RoutesWrapper>
  );
};

export default Routing;
