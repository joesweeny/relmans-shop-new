import React, { createContext, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';

import { getProducts } from '../gateway/client';

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((p) => {
        setProducts(p);
      })
      .catch((e) => {
        setError('Error fetching products');
      });
  }, []);

  const store = useMemo(
    () => ({
      products,
      error,
    }),
    [products, error]
  );

  return (
    <ProductContext.Provider value={store}>{children}</ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: node.isRequired,
};

export default ProductContextProvider;
