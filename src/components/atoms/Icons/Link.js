import React from 'react';

const Link = ({ className, color = '#3d4d65' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
  >
    <g>
      <path fill={color} d="M16 9h2v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h7v2H2v14h14zm2-9v7h-2V3.41l-9.83 9.83-1.41-1.41L14.59 2H11V0z" />
    </g>
  </svg>
);

export default Link;
