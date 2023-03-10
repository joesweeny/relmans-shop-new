import React from 'react';
import styled from 'styled-components';

import FAQSection from './FAQSection/FAQSection.jsx';

const FAQWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const FAQ = () => {
  return (
    <FAQWrapper>
      <FAQSection title="How can I place an order?">
        <p>
          <b>Step 1:</b> Please navigate around our online shop and add the
          items you wish to purchase to your basket by clicking the + icon below
          a product. Your basket can be viewed by clicking the basket icon in
          the top navigation bar.
        </p>
        <p>
          <b>Step 2:</b> Once your basket contains all of the products you
          require click the <b>Go To Checkout</b> button.
        </p>
        <p>
          <b>Step 3:</b> Follow the steps entering your requirement fulfilment
          method as well as contact and delivery details. Payment is made on the
          final step.
        </p>
        <p>
          <b>Step 4:</b> Once payment is made you will receive an email
          confirming receipt of your order. Our team will then process your
          order and you will then receive a follow up email to confirm
          acceptance of your order.
        </p>
      </FAQSection>
      <FAQSection title="What postcodes do you deliver to?">
        We currently offer delivery to the following postcodes starting with:
        <ul>
          <li>DH8 0</li>
          <li>DH8 5</li>
          <li>DH8 6</li>
          <li>DH8 7</li>
          <li>DH8 8</li>
        </ul>
        For example DH8 7UJ is a valid delivery postcode.
      </FAQSection>
      <FAQSection title="What time will my delivery arrive?">
        Our deliveries are made between 11am and 2pm, Tuesday to Saturday so
        please ensure that someone is there to receive your order. If you are
        not going to be in during these times please get in touch with us and we
        can arrange a safe place for your goods to be left or alternatively
        arrange delivery for another day.
      </FAQSection>
      <FAQSection title="How can I contact you?">
        You can call us on 01207 505001 or email us on orders@relmans.co.uk or
        or feel free to pop into our shop at:
        <p>Relmans</p>
        <p>41 Middle Street</p>
        <p>Consett</p>
        <p>DH8 5QP</p>
      </FAQSection>
      <FAQSection title="Why didn't I receive an item which I ordered?">
        Unfortunately there are occasions where the item you ordered may be out
        of stock during our procurement process. If this occurs then we will
        notify you immediately and arrange for either a substitution to be made
        or for the item to be delivered when it is available.
      </FAQSection>
      <FAQSection title="Is there a minimum order?">
        There is no minimum order however any orders for delivery under £25 will
        be subject to a £2.50 delivery charge.
      </FAQSection>
      <FAQSection title="What are my payment options?">
        Payments through the online shop are made through either PayPal or
        debit/credit card. In shop purchases can be made via debit/credit card
        or cash.
      </FAQSection>
      <FAQSection title="Can I collect my order?">
        You are more than welcome to collect your order. When placing an order
        online please select the collection option and your order can be
        collected between 11am and 3pm from:
        <p>Relmans</p>
        <p>41 Middle Street</p>
        <p>Consett</p>
        <p>DH8 5QP</p>
      </FAQSection>
      <FAQSection title="What if I am unhappy with my order?">
        We pride ourselves on providing the highest quality produce. If
        something is not up to the standard you expect please get in touch and
        we will arrange to replace or refund your goods.
      </FAQSection>
    </FAQWrapper>
  );
};

export default FAQ;
