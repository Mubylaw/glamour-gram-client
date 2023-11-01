import React from "react";

const ProfileSvg = ({ fill }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.3334 35V31.6667C33.3334 29.8986 32.631 28.2029 31.3807 26.9526C30.1305 25.7024 28.4348 25 26.6667 25H13.3334C11.5652 25 9.86955 25.7024 8.61931 26.9526C7.36907 28.2029 6.66669 29.8986 6.66669 31.6667V35"
        stroke={fill}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 18.3333C23.6819 18.3333 26.6666 15.3486 26.6666 11.6667C26.6666 7.98477 23.6819 5 20 5C16.3181 5 13.3333 7.98477 13.3333 11.6667C13.3333 15.3486 16.3181 18.3333 20 18.3333Z"
        stroke={fill}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ProfileSvg;
