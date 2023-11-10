import React from "react";
import { motion } from "framer-motion";
import { drawStroke } from "../../utils/motion";

const CurveSvg = ({}) => {
  return (
    <motion.svg
      width="295"
      height="70"
      viewBox="0 0 295 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={drawStroke(1.5, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
    >
      <path
        // className="drawing"
        d="M-8.05706 42.1842C15.1441 28.1056 41.3418 18.493 67.3012 10.8464C92.8958 3.30726 123.544 0.320935 149.85 6.90744C172.38 12.5487 194.954 20.1482 215.785 30.4699C230.388 37.7059 244.793 45.383 259.458 52.4851C269.812 57.4988 280.731 61.2671 291.16 66.1449"
        stroke="#47BBEC"
        stroke-width="6"
        stroke-linecap="round"
      />
    </motion.svg>
  );
};

export default CurveSvg;
