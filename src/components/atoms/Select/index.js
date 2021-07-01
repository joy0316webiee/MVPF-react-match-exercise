import React, { useState } from 'react';
import { Select as AntSelect } from 'antd';
import cx from 'clsx';

// components
import { IconCaretDown, IconCheck } from '../Icons';

const { Option } = AntSelect;

const Select = ({
  className,
  variant = 'single', // single | multiple,
  options,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <AntSelect
      showSearch
      className={cx({
        'mvpf-select': true,
        [className || '']: className
      })}
      open={open}
      mode={variant}
      optionLabelProp="label"
      optionFilterProp="label"
      filterOption={(input, { label }) => (
        label && label.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )}
      dropdownClassName={cx('mvpf-select__dropdown', `mvpf-select__dropdown-${variant}`)}
      suffixIcon={
        <IconCaretDown
          className={cx({
            'arrow-down': true,
            'arrow-down__active': open
          })}
        />
      }
      menuItemSelectedIcon={null}
      onDropdownVisibleChange={setOpen}
      {...props}
    >
      {options.map(({ label, value }, key) => (
        <Option key={key} label={label} value={value}>
          {variant === 'single' ? (
            label
          ) : (
            <>
              <span className="status"><IconCheck /></span>
              <span className="label">{label}</span>
            </>
          )}
        </Option>
      ))}
    </AntSelect>
  );
};

export default Select;
