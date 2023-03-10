import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { addItem, removeItem } from '../../../store/actions/checkout';

const ProductToggleWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  background-color: ${(props) => (props.count > 0 ? '#f1943c' : '#3d604c')};
  align-items: center;
  border-radius: 0 0 10px 10px;
  font-weight: 600;
  height: 40px;
  padding: 10px;

  p {
    font-size: 22px;
  }

  svg {
    cursor: pointer;
    color: white;

    &:hover {
      color: #eeeeee;
    }
  }

  @media (min-width: 1024px) {
    padding: 10px 20px 10px 20px;
    height: 50px;

    p {
      font-size: 30px;
    }
  }
`;

const ProductToggle = (props) => {
  const { productId, priceId, name, price, size, status, measurement } = props;
  const { items, dispatch } = useContext(CheckoutContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const c = items.find((obj) => obj.priceId === priceId) || null;

    setCount(c !== null ? c.count : 0);
  }, [items, priceId]);

  const add = () => {
    dispatch(addItem(priceId, productId, name, size, measurement, price));
  };

  const remove = () => {
    if (count === 0) {
      return;
    }

    dispatch(removeItem(priceId, price));
  };

  return (
    <ProductToggleWrapper count={count}>
      <FontAwesomeIcon
        icon={faMinusCircle}
        size="2x"
        onClick={() => remove()}
        style={{ display: status === 'IN_STOCK' ? 'flex' : 'none' }}
      />
      <p>{count === 0 ? null : count}</p>
      <FontAwesomeIcon
        icon={faPlusCircle}
        size="2x"
        onClick={() => add()}
        style={{ display: status === 'IN_STOCK' ? 'flex' : 'none' }}
      />
    </ProductToggleWrapper>
  );
};

ProductToggle.propTypes = {
  productId: string.isRequired,
  priceId: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  status: string.isRequired,
  measurement: string.isRequired,
};

export default ProductToggle;
