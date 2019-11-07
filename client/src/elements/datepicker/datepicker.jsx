import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import classes from "./datepicker.module.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(undefined);
  const datePicker = startDate ? (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  ) : (
    <DatePicker
      onChange={date => setStartDate(date)}
      placeholderText="Select a deadline"
    />
  );
  return datePicker;
};

export default Datepicker;
