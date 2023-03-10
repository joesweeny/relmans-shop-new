import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoryContext } from '../../../context/CategoryContext.jsx';

import CategoryDisplayItem from './CategoryDisplayItem/CategoryDisplayItem.jsx';
import Loader from '../../Loader/Loader.jsx';

const CategoryDisplayWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0 10px 0;

  @media (min-width: 1025px) {
    width: 60%;
    margin: 20px 0 20px 0;
  }
`;

const CategoryDisplay = () => {
  const { categories, loading, error } = useContext(CategoryContext);

  return (
    <CategoryDisplayWrapper>
      {error ?? null}
      <Loader loading={loading}>
        {categories.map((c) => (
          <CategoryDisplayItem id={c.id} name={c.name} key={c.id} />
        ))}
      </Loader>
    </CategoryDisplayWrapper>
  );
};

export default CategoryDisplay;
