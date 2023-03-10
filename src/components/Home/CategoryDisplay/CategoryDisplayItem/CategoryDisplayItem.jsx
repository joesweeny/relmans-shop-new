import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;
  color: #3d604c;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  width: 48%;
  margin: 5px 0 5px 0;

  &:hover {
    background-color: #cecbcbee;
    font-weight: 600;

    img {
      opacity: 0.5;
    }
  }

  @media (min-width: 768px) {
    width: 32%;
  }

  @media (min-width: 1024px) {
    width: 24%;
    margin: 10px 0 10px 0;
  }
`;

const Title = styled.p`
  text-align: center;
  background-color: #ffffff;
  padding: 5px;
  color: #3d604c;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  border-radius: 10px 10px 0 0;
  width: 100%;
  font-size: 12px;

  @media (min-width: 1025px) {
    font-size: 16px;
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 125px;
  border-radius: 0 0 10px 10px;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 1025px) {
    height: 250px;
  }
`;

const CategoryDisplayItem = (props) => {
  const { id, name } = props;

  return (
    <StyledLink to={`/category/${id}`}>
      <Title>{name}</Title>
      <CategoryImage
        src={`https://relmans.s3.eu-west-2.amazonaws.com/categories/${id}.jpg`}
        alt={name}
      />
    </StyledLink>
  );
};

CategoryDisplayItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default CategoryDisplayItem;
