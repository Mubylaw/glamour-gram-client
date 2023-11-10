import React from "react";
import { motion } from "framer-motion";
import { drawStroke } from "../../utils/motion";

const CircleSvg = ({}) => {
  return (
    <motion.svg
      width="283"
      height="128"
      viewBox="0 0 283 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={drawStroke(1.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
    >
      <path
        d="M165.19 115.052C189.303 112.002 211.305 108.6 233.451 100.041C250.928 93.2862 271.655 84.0799 278.511 68.4265C284.687 54.3268 269.76 38.8671 257.534 30.3203C246.868 22.8638 234.217 18.9993 220.923 15.8321C202.526 11.4494 184.669 6.30327 165.532 4.41963C126.169 0.545366 82.4346 5.72866 46.1208 18.4465C18.4107 28.1512 -2.88946 52.2548 5.2184 77.7687C9.24387 90.4362 17.3336 105.309 31.8582 112.306C46.5404 119.38 64.3593 123.326 81.1791 124.472C102.701 125.938 122.52 121.293 143.203 117.48C167.968 112.915 192.822 108.622 217.778 104.782"
        stroke="#47BBEC"
        stroke-width="6"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};

export default CircleSvg;
