import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 48px 40px;
  max-width: 520px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px;
`;

const Dates = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #555;
  margin: 0 0 20px;
`;

const Message = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin: 0 0 24px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 0 0 20px;
`;

const ContactLine = styled.p`
  font-size: 15px;
  color: #444;
  margin: 0;
`;

const Phone = styled.a`
  font-weight: 700;
  color: #2c7a3f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MaintenanceModal = () => (
  <Overlay>
    <Modal>
      <Icon>🔧</Icon>
      <Title>Under Maintenance</Title>
      <Dates>Monday 27th July – Wednesday 5th August 2026</Dates>
      <Message>
        We apologise for the inconvenience. Our site is currently undergoing
        scheduled maintenance and will be back open on Thursday 6th August 2026.
      </Message>
      <Divider />
      <ContactLine>
        If you have any questions, please call us on{' '}
        <Phone href="tel:07920068900">07920068900</Phone>.
      </ContactLine>
    </Modal>
  </Overlay>
);

export default MaintenanceModal;
