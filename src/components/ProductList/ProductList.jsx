import React from 'react';
import styled from 'styled-components';
import { arrayOf, number, shape, string } from 'prop-types';

import Product from '../Product/Product.jsx';

const ProductListWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  justify-content: ${(props) =>
    props.length < 4 ? 'center' : 'space-between'};
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;

  @media (min-width: 1025px) {
    width: 80%;
  }
`;

const ProductList = (props) => {
  const { products } = props;

  return (
    <ProductListWrapper length={products.length}>
      {products.map((p) => {
        return p.prices.map((pr) => {
          return (
            <Product
              id={p.id}
              priceId={pr.id}
              name={p.name}
              status={p.status}
              price={pr.value}
              size={pr.size}
              measurement={pr.measurement}
              key={pr.id}
            />
          );
        });
      })}
    </ProductListWrapper>
  );
};

ProductList.propTypes = {
  products: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      status: string.isRequired,
      prices: arrayOf(
        shape({
          id: string.isRequired,
          value: number.isRequired,
          size: number.isRequired,
          measurement: string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default ProductList;
