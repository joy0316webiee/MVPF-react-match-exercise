import React from 'react';
import { Input as AntInput } from 'antd';
import cx from 'clsx';

const Input = ({
  className,
  variant = 'text', // text | textarea
  addonAfter,
  addonBefore,
  ...props
}) => {
  const classes = cx({
    'mvpf-input': true,
    [className || '']: className
  });

  if (variant === 'textarea') {
    return (
      <AntInput.TextArea
        {...props}
        className={classes}
      />
    );
  }
  return (
    <AntInput
      className={classes}
      type={variant}
      prefix={addonBefore}
      suffix={addonAfter}
      {...props}
    />
  );
};

export default Input;
