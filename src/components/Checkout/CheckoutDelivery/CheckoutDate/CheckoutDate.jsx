import React from 'react';
import styled from 'styled-components';
import { bool, func, instanceOf } from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CheckoutDateWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 10px 0 30px 0;
  cursor: pointer;
  background-color: #eeeeee;

  input {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    padding: 7px 5px;
    background: transparent;
    text-align: center;
    cursor: pointer;
    color: #3d604c;
    font-weight: 600;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__time-list-item--selected,
  .react-datepicker__day--selected {
    background: green !important;
  }
`;

const CheckoutDate = (props) => {
  const { isCollection, selectedDate, setSelectedDate } = props;

  const dates = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 1;
  };

  const minDate = new Date(Date.now() + 3600 * 1000 * 24).setHours(11, 0, 0);
  const maxDate = new Date(Date.now() + 3600 * 1000 * 192).setHours(15, 0, 0);

  return (
    <CheckoutDateWrapper>
      <DatePicker
        selected={selectedDate}
        filterDate={dates}
        excludeDates={[new Date()]}
        minDate={minDate}
        maxDate={maxDate}
        minTime={new Date().setHours(11, 0, 0)}
        maxTime={new Date().setHours(15, 0, 0)}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Click to select a date"
        dateFormat={isCollection ? 'd MMMM yyyy - h:mm aa' : 'd MMMM yyyy'}
        showTimeSelect={isCollection}
      />
    </CheckoutDateWrapper>
  );
};

CheckoutDate.propTypes = {
  isCollection: bool.isRequired,
  selectedDate: instanceOf(Date),
  setSelectedDate: func.isRequired,
};

CheckoutDate.defaultProps = {
  selectedDate: null,
};

export default CheckoutDate;
