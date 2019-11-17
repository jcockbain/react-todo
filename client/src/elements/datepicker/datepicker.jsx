import React, { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Datepicker = ({ addDate }) => {
  const [date, setDate] = useState(undefined);
  useEffect(() => {
    if (date) {
      addDate(date);
    }
  }, [date]);
  const datePicker = date ? (
    <DatePicker selected={date} onChange={(selectedDate) => setDate(selectedDate)} />
  ) : (
    <DatePicker
      onChange={(selectedDate) => setDate(selectedDate)}
      placeholderText="Select a deadline"
    />
  );
  return datePicker;
};

export default Datepicker;
