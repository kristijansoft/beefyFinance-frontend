import React from 'react';
const SpanLoader = () => {
  return (
    <>
      <svg
        aria-labelledby="x85rcpr-aria"
        role="img"
        width="64"
        height="24"
        viewBox="0 0 64 24"
      >
        <title id="x85rcpr-aria">Loading...</title>
        <rect
          role="presentation"
          x="0"
          y="0"
          width="100%"
          height="100%"
          clip-path="url(#x85rcpr-diff)"
          style={{ fill: 'url("#x85rcpr-animated-diff")' }}
        ></rect>
        <defs>
          <clipPath id="x85rcpr-diff">
            <rect x="0" y="0" width="64" height="24"></rect>
          </clipPath>
          <linearGradient id="x85rcpr-animated-diff">
            <stop offset="0%" stop-color="#FBF6F0" stop-opacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="50%" stop-color="#EFE6DC" stop-opacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stop-color="#FBF6F0" stop-opacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="1.2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default SpanLoader;
