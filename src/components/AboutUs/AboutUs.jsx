import React from 'react';
import styled from 'styled-components';

const AboutUsWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 30px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
  color: #3d604c;
  font-size: 14px;

  @media (min-width: 1025px) {
    width: 50%;
    font-size: 18px;
  }
`;

const Section = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  p {
    padding: 15px 0 15px 0;
  }
`;

const Title = styled.div`
  text-align: left;
  background-color: #ffffff;
  padding: 5px;
  color: #3d604c;
  font-size: 26px;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  border-radius: 10px 10px 0 0;
  width: 100%;
  margin-bottom: 10px;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <Card>
        <Section align="left">
          <Title>About Us</Title>
          <p>
            We are a family run speciality greengrocers that have been serving
            the local community of Consett and surrounding areas since 1997.
          </p>
          <p>
            Sourced from UK, Europe and beyond, Relmans procure fresh produce
            daily, guaranteeing freshness and a superior quality of goods.
          </p>
          <p>
            Our service is built on delivering high quality produce with a
            personal touch.
          </p>
        </Section>
      </Card>
      <Card>
        <Section>
          <Title>Who we serve</Title>
          <p>
            We welcome customers into our shop on Middle Street in Consett as
            well as providing a delivery service to doorsteps of our
            customer&apos;s homes. We also provide a delivery service to our
            wholesale customers in the following industries:
          </p>
          <ul>
            <li>Pubs</li>
            <li>Restaurants</li>
            <li>Cafes and Tea Rooms</li>
            <li>Schools</li>
            <li>Bakeries</li>
          </ul>
          <p>
            For any enquiries please do not hesitate to call us on{' '}
            <b>01207 505001</b> or email us on <b>orders@relmans.co.uk.</b>
          </p>
        </Section>
      </Card>
    </AboutUsWrapper>
  );
};

export default AboutUs;
