import React from 'react';
import { Table as AntTable, Form } from 'antd';
import cx from 'clsx';

// components
import { Button, Input, Select, DatePicker } from '../../atoms';
import CheckboxGroup from '../CheckboxGroup';

// hooks
import { useResponsive } from '../../../hooks';

const DEFAULT_PAGE_SIZE = 20;

const Table = ({
  className,
  pagination,
  columns,
  rowKey = 'key',
  rowSelection,
  ...props
}) => {
  const { multiplier } = useResponsive();

  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <AntTable
        className={cx({
          'mvpf-table': true,
          [className || '']: className
        })}
        rowKey={rowKey}
        columns={columns}
        pagination={{
          pageSize: DEFAULT_PAGE_SIZE,
          showSizeChanger: false,
          ...pagination
        }}
        rowSelection={rowSelection && ({
          columnWidth: 52 * multiplier,
          ...rowSelection
        })}
        hideSelectAll
        {...props}
      />
    </Form>
  );
};

const FilterDropdown = ({
  className,
  variant = 'input', // input | multi-select | date | checkbox
  value,
  placeholder,
  options,
  onChange,
  onReset,
  ...props
}) => {
  const classes = cx({
    'mvpf-filter__dropdown': true,
    [`mvpf-filter__dropdown-${variant}`]: true,
    [className || '']: className
  });

  return (
    <div className={classes}>
      <span className="filter-by">Filter by:</span>

      {variant === 'input' && (
        <Input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      )}
      {variant === 'multi-select' && (
        <Select
          variant="multiple"
          placeholder="placeholder"
          value={value}
          options={options}
          onChange={onChange}
          {...props}
        />
      )}
      {variant === 'date' && (
        <DatePicker
          value={value}
          picker="year"
          placeholder="Select a year"
          format="YYYY"
          onChange={onChange}
          {...props}
        />
      )}
      {variant === 'checkbox' && (
        <>
          <CheckboxGroup
            className="options-checkbox__group"
            alignDirection="vertical"
            options={options}
            value={value}
            onChange={onChange}
          />
          <Button
            className="btn-reset__filter"
            variant="link"
            onClick={onReset}
          >
            Reset
          </Button>
        </>
      )}
    </div>
  );
};

export { Table, FilterDropdown };
