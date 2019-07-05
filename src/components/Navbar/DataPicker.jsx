import React, { Fragment, useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";

const BasicDateTimePicker =() => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DateTimePicker
        label="Choose Date"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default BasicDateTimePicker;