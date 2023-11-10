import React from "react";
import { motion } from "framer-motion";
import { drawStroke } from "../../utils/motion";

const CapSvg = ({}) => {
  return (
    <motion.svg
      width="23"
      height="40"
      viewBox="0 0 23 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={drawStroke(1.5, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
    >
      <path
        d="M3.79977 3.54086C3.24834 3.02236 4.43461 11.0836 5.18864 12.3789C7.97871 17.1717 13.2525 20.5889 16.7057 24.9085C17.752 26.2173 20.8127 30.3039 19.2245 32.1402C16.2272 35.6057 8.73337 36.057 4.57116 36.8262"
        stroke="#47BBEC"
        stroke-width="6"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};

export default CapSvg;
