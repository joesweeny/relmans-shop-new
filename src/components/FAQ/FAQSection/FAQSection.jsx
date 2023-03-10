import React, { useState } from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const FAQSectionWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 95%;
  padding: 20px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
  color: #3d604c;
  font-size: 14px;

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 18px;
  }

  p {
    padding: 5px 0 5px 0;
  }
`;

const Title = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  background-color: #ffffff;
  color: #f1943c;
  font-size: 12px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  align-items: center;

  @media (min-width: 1025px) {
    font-size: 26px;
    padding-bottom: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

const Section = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top: 1px solid #cecbcbee;
  padding-top: 10px;
`;

const FAQSection = (props) => {
  const { children, title } = props;
  const [open, setOpen] = useState(false);

  return (
    <FAQSectionWrapper>
      <Title>
        {title}
        <FontAwesomeIcon
          icon={faEye}
          size="1x"
          onClick={() => setOpen(!open)}
          style={{ color: open ? 'green' : '#f1943c' }}
        />
      </Title>
      {open ? <Section>{children}</Section> : null}
    </FAQSectionWrapper>
  );
};

FAQSection.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};

export default FAQSection;
