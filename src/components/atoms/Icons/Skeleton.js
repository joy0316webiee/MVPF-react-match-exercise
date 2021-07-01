import React from 'react';

const Skeleton = ({ className, color = 'rgba(240, 248, 255, 0.32)' }) => (
  <svg
    className={className}
    width="276"
    height="260"
    viewBox="0 0 276 260"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="7m9xa">
        <path
          fill="#fff"
          d="M0 8a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
        />
      </clipPath>
      <clipPath id="7m9xb">
        <path
          fill="#fff"
          d="M0 100a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
        />
      </clipPath>
      <clipPath id="7m9xc">
        <path
          fill="#fff"
          d="M0 192a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
        />
      </clipPath>
    </defs>
    <g>
      <g>
        <path
          fill="none"
          stroke={color}
          strokeMiterlimit="20"
          strokeOpacity=".5"
          strokeWidth="4"
          d="M0 8a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
          clipPath='url("#7m9xa")'
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 22a4 4 0 0 1 4-4h140a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 114a4 4 0 0 1 4-4h140a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 206a4 4 0 0 1 4-4h140a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 50a4 4 0 0 1 4-4h71a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 142a4 4 0 0 1 4-4h71a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill={color}
          fillOpacity="0.7"
          d="M16 234a4 4 0 0 1 4-4h71a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4z"
        />
      </g>
      <g>
        <path
          fill="none"
          stroke={color}
          strokeMiterlimit="20"
          strokeOpacity=".5"
          strokeWidth="4"
          d="M0 100a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
          clipPath='url("#7m9xb")'
        />
      </g>
      <g>
        <path
          fill="none"
          stroke={color}
          strokeMiterlimit="20"
          strokeOpacity=".5"
          strokeWidth="4"
          d="M0 192a8 8 0 0 1 8-8h260a8 8 0 0 1 8 8v60a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z"
          clipPath='url("#7m9xc")'
        />
      </g>
    </g>
  </svg>
);

export default Skeleton;
