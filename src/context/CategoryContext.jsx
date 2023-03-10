import React, { createContext, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';

import { getCategories } from '../gateway/client';

export const CategoryContext = createContext(null);

const CategoryContextProvider = (props) => {
  const { children } = props;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getCategories()
      .then((c) => {
        setCategories(c);
        setLoading(false);
      })
      .catch((e) => {
        setError('Error fetching categories');
        setLoading(false);
      });
  }, []);

  const store = useMemo(
    () => ({
      categories,
      loading,
      error,
    }),
    [categories, loading, error]
  );

  return (
    <CategoryContext.Provider value={store}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryContextProvider.propTypes = {
  children: node.isRequired,
};

export default CategoryContextProvider;
