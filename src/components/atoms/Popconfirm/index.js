import React from 'react';
import { Popconfirm as AntPopconfirm } from 'antd';
import cx from 'clsx';

const Popconfirm = ({
  className,
  children,
  ...props
}) => {
  return (
    <AntPopconfirm
      {...props}
      overlayClassName={cx({
        'mvpf-pop__confirm': true,
        [className || '']: className
      })}
      icon={null}
    >
      {children}
    </AntPopconfirm>
  );
};

export default Popconfirm;
