import axios from './axios-client';

export const getCategories = async () => {
  const response = await axios.get('/category');
  return response.data.data.categories;
};

export const getProducts = async (categoryId) => {
  const response = await axios.get('/product', { params: { categoryId } });
  return response.data.data.products;
};

export const createOrder = async (payload) => {
  const response = await axios.post('/order', payload);
  return response.data.id;
};

export const updateOrder = async (id, payload) => {
  await axios.patch(`/order/${id}`, payload);
};
