import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import moment from 'moment';
import cx from 'clsx';

// components
import { IconCalendar } from '../Icons';

const { RangePicker: AntRangePicker } = AntDatePicker;

const DatePicker = ({
  className,
  variant = 'single', // single | range
  defaultValue,
  placeholder,
  ...props
}) => {
  const classes = cx({
    'mvpf-date__picker': true,
    [`mvpf-date__picker-${variant}`]: true,
    [className || '']: className
  });

  const nowDate = moment();

  if (variant === 'single') {
    return (
      <AntDatePicker
        className={classes}
        defaultValue={defaultValue ? moment(defaultValue, 'YYYY-MM-DD') : nowDate}
        placeholder={placeholder || 'YYYY-MM-DD'}
        format="YYYY-MM-DD"
        suffixIcon={<IconCalendar />}
        {...props}
      />
    );
  }

  return (
    <AntRangePicker
      className={classes}
      defaultValue={defaultValue ? [
        moment(defaultValue[0], 'YYYY-MM-DD'),
        moment(defaultValue[1], 'YYYY-MM-DD'),
      ] : [
        nowDate,
        nowDate
      ]}
      format="YYYY-MM-DD"
      {...props}
    />
  );
};
export default DatePicker;
