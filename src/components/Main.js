import "./main.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
};

export default function Main({ open }) {
  return (
    <div className="main">
      <div className="wrapper">
        <motion.div
          className={`textContainer ${open ? "activeTextContainer" : ""} `}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Abhishek Shinde</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest works
            </motion.button>
            <motion.button variants={textVariants}>
              Download my resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* <div className="imageContainer">
        <img src="/newprofile.png" alt="processing" />
      </div> */}
    </div>
  );
}
