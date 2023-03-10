import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledLink = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  justify-content: row;
  align-items: center;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;
  color: #3d604c;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  p {
    padding-left: 15px;
  }

  &:hover {
    background-color: #cecbcbee;
    font-weight: 600;

    img {
      opacity: 0.5;
    }
  }
`;

const CategoryMenuItem = (props) => {
  const { id, name, click } = props;

  return (
    <StyledLink to={`/category/${id}`} onClick={click}>
      <CategoryImage
        src={`https://relmans.s3.eu-west-2.amazonaws.com/categories/${id}.jpg`}
        alt={name}
      />
      <p>{name}</p>
    </StyledLink>
  );
};

CategoryMenuItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  click: func.isRequired,
};

export default CategoryMenuItem;
