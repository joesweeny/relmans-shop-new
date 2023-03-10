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
      <ImageCarousel />
      <CategoryDisplay />
      <InformationButtons />
    </HomeWrapper>
  );
};

export default Home;
