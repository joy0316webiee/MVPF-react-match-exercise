import React from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import cx from 'clsx';

// components
import Checkbox from '../../atoms/Checkbox';

const CheckboxGroup = ({
  className,
  options,
  alignDirection = 'vertical', // vertical | horizontal
  ...props
}) => {
  return (
    <AntCheckbox.Group
      className={cx({
        'mvpf-checkbox__group': true,
        [`mvpf-checkbox__group-align-${alignDirection}`]: true,
        [className || '']: className
      })}
      {...props}
    >
      {options.map(({ label, value }, key) => (
        <Checkbox
          key={key}
          value={value}
          variant="secondary"
        >
          {label}
        </Checkbox>
      ))}
    </AntCheckbox.Group>
  );
};

export default CheckboxGroup;
