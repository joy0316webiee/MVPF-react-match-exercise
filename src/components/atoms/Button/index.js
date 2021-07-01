import React from 'react';
import { Button as AntButton } from 'antd';
import cx from 'clsx';

const Button = ({
  className,
  children,
  variant = 'primary', // primary | secondary | tertiary | default | link
  disabled,
  onClick,
  ...props
}) => {
  return (
    <AntButton
      {...props}
      className={cx({
        'mvpf-btn': true,
        [`mvpf-btn__${variant}`]: true,
        [className || '']: className
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </AntButton>
  );
};

export default Button;
