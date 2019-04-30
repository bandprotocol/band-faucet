import React from 'react'

export default ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 15 15"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#42C47F" />
      <path
        stroke="#FFF"
        stroke-linecap="round"
        d="M4.2 8.1l1.802 1.758L10.807 5.2"
      />
    </g>
  </svg>
)
