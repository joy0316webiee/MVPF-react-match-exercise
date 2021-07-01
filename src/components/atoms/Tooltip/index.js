import React from 'react';
import { Tooltip as AntTooltip } from 'antd';
import cx from 'clsx';

const Tooltip = ({
  className,
  children,
  ...props
}) => {
  return (
    <AntTooltip
      overlayClassName={cx({
      'mvpf-tooltip': true,
      [className || '']: className
    })}
      color="#3d4d65"
      {...props}
    >
      {children}
    </AntTooltip>
  );
};

export default Tooltip;
