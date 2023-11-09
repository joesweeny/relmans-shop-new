import React from 'react';
import styled from 'styled-components';

import CategoryDisplay from './CategoryDisplay/CategoryDisplay.jsx';
import ImageCarousel from './ImageCarousel/ImageCarousel.jsx';
import InformationButtons from './InformationDisplay/InformationButtons.jsx';

const HomeWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h2>The site is currently down for maintenance and we be live again to take orders on 24th November</h2>
      <ImageCarousel />
      <CategoryDisplay />
      <InformationButtons />
    </HomeWrapper>
  );
};

export default Home;
