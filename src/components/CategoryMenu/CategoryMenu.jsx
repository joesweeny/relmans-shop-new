import React, { useContext } from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

import CategoryMenuItem from './CategoryMenuItem/CategoryMenuItem';
import Loader from '../Loader/Loader.jsx';
import { CategoryContext } from '../../context/CategoryContext.jsx';

const CategoryMenuWrapper = styled.div`
  display: ${(props) => (props.open ? '-ms-flexbox' : 'none')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  width: 100vw;
  background-color: #3d604c;
  transition: transform 300ms;
  left: 0;
  z-index: 1000;
  overflow-y: auto;

  @media (min-width: 756px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    width: 230px;
  }
`;

const CategoryMenu = (props) => {
  const { open, click } = props;
  const { categories, loading, error } = useContext(CategoryContext);

  return (
    <CategoryMenuWrapper open={open}>
      {error ?? null}
      <Loader loading={loading}>
        {categories.map((c) => {
          return (
            <CategoryMenuItem
              id={c.id}
              name={c.name}
              key={c.id}
              click={() => click(false)}
            />
          );
        })}
      </Loader>
    </CategoryMenuWrapper>
  );
};

CategoryMenu.propTypes = {
  open: bool.isRequired,
  click: func.isRequired,
};

export default CategoryMenu;
