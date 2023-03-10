import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Watch } from 'react-loader-spinner';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CheckoutButton from '../CheckoutButton/CheckoutButton.jsx';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle.jsx';
import PaymentTotal from './PaymentTotal/PaymentTotal.jsx';
import { CheckoutContext } from '../../../context/CheckoutContext.jsx';
import { setDeliveryField } from '../../../store/actions/checkout';
import { updateOrder } from '../../../gateway/client';

const CheckoutPaymentWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;

  p {
    width: 100%;
  }

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }

  .paypal {
    width: 100%;
  }
`;

const Loading = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #3d604c;
  font-size: 14px;
  font-weight: 600;

  p {
    padding: 10px;
    font-size: 16px;
    text-align: center;
  }
`;

const options = {
  'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: 'GBP',
  intent: 'capture',
  commit: true,
};

const CheckoutPayment = (props) => {
  const { nextStep } = props;
  const [total, setTotal] = useState(0);
  const [fee, setFee] = useState(0);
  const [loading, setLoading] = useState(false);
  const {
    items,
    firstName,
    lastName,
    address,
    method,
    createNewOrder,
    dispatch,
  } = useContext(CheckoutContext);

  useEffect(() => {
    const sum = items.reduce((prev, next) => prev + next.total, 0);

    if (method.type === 'DELIVERY') {
      const delivery = sum < 2500 ? 250 : 0;

      dispatch(setDeliveryField('fee', delivery));
      setFee(delivery);
    }

    if (method.type === 'COLLECTION') {
      dispatch(setDeliveryField('fee', 0));
      setFee(0);
    }

    setTotal(sum);
  }, [items, dispatch, method.type]);

  const createOrder = (data, actions) => {
    const payload = {
      purchase_units: [
        {
          amount: {
            currency_code: 'GBP',
            value: ((total + fee) / 100).toString(),
            breakdown: {
              item_total: {
                currency_code: 'GBP',
                value: (total / 100).toString(),
              },
              shipping: {
                currency_code: 'GBP',
                value: fee === 0 ? '0' : (fee / 100).toString(),
              },
            },
          },
          items: items.map((i) => {
            return {
              name: `${i.name} (${i.size} ${i.measurement})`,
              quantity: i.count,
              unit_amount: {
                currency_code: 'GBP',
                value: (i.price / 100).toString(),
              },
            };
          }),
          payee: {
            email_address: 'orders@relmans.co.uk',
          },
          shipping: {
            name: {
              full_name: `${firstName} ${lastName}`,
            },
            address:
              method.type === 'DELIVERY'
                ? {
                    address_line_1: address.line1,
                    address_line_2: address.line2,
                    admin_area_2: address.town,
                    admin_area_1: address.county,
                    postal_code: address.postCode,
                    country_code: 'GB',
                  }
                : null,
          },
        },
      ],
    };

    return actions.order.create(payload).then((id) => {
      createNewOrder(id);
      return id;
    });
  };

  const onCancel = (data) => {
    updateOrder(data.orderID, { status: 'CANCELLED' }).then(() => {
      setLoading(false);
    });
  };

  const onApprove = (data, actions) => {
    setLoading(true);

    return actions.order.capture().then((details) => {
      updateOrder(details.id, { status: 'PAYMENT_RECEIVED' }).then(() => {
        setLoading(false);
        nextStep((prev) => prev + 1);
      });
    });
  };

  return (
    <CheckoutPaymentWrapper>
      <CheckoutTitle>Payment</CheckoutTitle>
      {!loading ? (
        <CheckoutButton
          click={() => nextStep((prev) => prev - 1)}
          color="#eeeeee"
          size="12px"
        >
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
          Back to customer details
        </CheckoutButton>
      ) : null}
      {loading ? (
        <Loading>
          <Watch color="#3d604c" height={100} width={100} />
          <p>Processing your order...please do not refresh the page</p>
        </Loading>
      ) : (
        <PaymentTotal fee={fee} total={total} type={method.type} />
      )}
      <PayPalScriptProvider options={options}>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          onCancel={(data, actions) => onCancel(data, actions)}
          className="paypal"
          forceReRender={total}
        />
      </PayPalScriptProvider>
    </CheckoutPaymentWrapper>
  );
};

CheckoutPayment.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutPayment;
