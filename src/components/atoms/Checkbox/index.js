import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import cx from 'clsx';

const Checkbox = ({
  className,
  children,
  variant = 'primary', // primary | secondary
  labelPosition = 'right', // left | right
  ...props
}) => {
  return (
    <AntCheckbox
      className={cx({
        'mvpf-checkbox': true,
        [`mvpf-checkbox__${variant}`]: true,
        [`mvpf-checkbox__label-${labelPosition}`]: true,
        [className || '']: className
      })}
      {...props}
    >
      {children}
    </AntCheckbox>
  );
};

export default Checkbox;
