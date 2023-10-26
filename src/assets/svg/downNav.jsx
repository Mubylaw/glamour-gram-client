import React from "react";

const Down = ({ fill, rota }) => {
  return (
    <svg
      width="27"
      height="13"
      viewBox="0 0 27 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={!rota ? "" : "rota"}
    >
      <path
        d="M0.382651 0.335966C0.84647 -0.0712655 1.57227 -0.108286 2.08372 0.224903L2.23025 0.335966L13.5 10.2302L24.7697 0.335966C25.2336 -0.0712655 25.9594 -0.108286 26.4708 0.224903L26.6173 0.335966C27.0812 0.743197 27.1233 1.38045 26.7438 1.8295L26.6173 1.95815L14.4238 12.664C13.96 13.0713 13.2342 13.1083 12.7227 12.7751L12.5762 12.664L0.382651 1.95815C-0.12755 1.5102 -0.12755 0.78392 0.382651 0.335966Z"
        fill={fill}
      />
    </svg>
  );
};

export default Down;
