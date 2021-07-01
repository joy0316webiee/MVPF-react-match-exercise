import React from 'react';

const CaretDown = ({ className, color = '#9196AF' }) => (
  <svg
    className={className}
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0.5L9 9.5L18 0.5H0Z" fill={color} />
  </svg>
);

export default CaretDown;
