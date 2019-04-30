import React from 'react'

export default ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 15 15"
  >
    <g fill="none" fill-rule="evenodd">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#EC6363" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M8.218 9.172h-1.44V3.34h1.44v5.832zm-1.68 1.824c0-.256.094-.476.282-.66a.935.935 0 0 1 .678-.276c.256 0 .48.088.672.264a.845.845 0 0 1 .288.648.891.891 0 0 1-.282.66.935.935 0 0 1-.678.276.948.948 0 0 1-.366-.072 1.044 1.044 0 0 1-.306-.192.892.892 0 0 1-.21-.288.844.844 0 0 1-.078-.36z"
      />
    </g>
  </svg>
)
