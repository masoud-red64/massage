import React, { useState } from "react";
import "./DatePick.css";
import DatePicker, { DateObject } from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/colors/red.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

export default function DatePick({ date, setDate }) {
  return (
    <div className="date">
      <DatePicker
        containerClassName="custom-container"
        render={<InputIcon />}
        format="YYYY/MM/DD - HH:mm"
        plugins={[<TimePicker hideSeconds position="bottom" />]}
        calendar={persian}
        locale={persian_fa}
        className="bg-dark red"
        value={date}
        onChange={setDate}
        calendarPosition="top-right"
        required
      />
    </div>
  );
}
