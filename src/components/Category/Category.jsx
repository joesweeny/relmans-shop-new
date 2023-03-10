import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loader from '../Loader/Loader.jsx';
import ProductList from '../ProductList/ProductList.jsx';
import { getProducts } from '../../gateway/client';
import { CategoryContext } from '../../context/CategoryContext.jsx';

const CategoryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 0 0 20px 0;

  @media (min-width: 1024px) {
    padding: 20px 50px 20px 50px;
  }
`;

const Breadcrumbs = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 22px;
  color: #3d604c;
  margin: 10px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  text-align: center;
  width: 99%;

  span {
    padding: 0 5px 0 5px;
  }

  @media (min-width: 1025px) {
    width: 80%;
    font-size: 28px;
  }
`;

const HomeButton = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #3d604c;
  height: 100%;
  width: 15%;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  margin-right: 10px;

  &:hover {
    color: #f1943c;
  }

  @media (min-width: 1025px) {
    width: 5%;
  }
`;

const Category = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    getProducts(id)
      .then((p) => {
        const filtered = p.filter((prod) => prod.status !== 'OUT_OF_SEASON');
        setProducts(filtered);
        setLoading(false);
      })
      .catch((e) => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, [id, categories]);

  const category = categories.find((c) => c.id === id);

  return (
    <CategoryWrapper>
      <Loader loading={loading}>
        {error ?? null}
        <Breadcrumbs>
          <HomeButton to="/">
            <FontAwesomeIcon icon={faHome} size="1x" />
          </HomeButton>
          <span>{category !== undefined ? category.name : null}</span>
        </Breadcrumbs>
        <ProductList products={products} />
      </Loader>
    </CategoryWrapper>
  );
};

export default Category;
