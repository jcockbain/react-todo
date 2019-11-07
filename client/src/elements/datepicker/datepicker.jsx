import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import classes from "./datepicker.module.css";

const Datepicker = ({ addDate }) => {
  const [date, setDate] = useState(undefined);
  useEffect(() => {
    if (date) {
      addDate(date);
    }
  }, [date]);
  const datePicker = date ? (
    <DatePicker selected={date} onChange={date => setDate(date)} />
  ) : (
    <DatePicker
      onChange={date => setDate(date)}
      placeholderText="Select a deadline"
    />
  );
  return datePicker;
};

export default Datepicker;
