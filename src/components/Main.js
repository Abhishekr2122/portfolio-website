import "./main.scss";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
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
            <a
              href="https://github.com/Abhishekr2122?tab=repositories"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "black",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              <motion.button variants={textVariants}>
                See the Latest works
              </motion.button>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1ELpIuV8Q0g54dKWA24jzhXlk7k8zpD4M"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "black",
                textDecoration: "none",
                backgroundColor: "transparent",
              }}
            >
              <motion.button variants={textVariants}>
                Download resume
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
        <div
          style={{
            border: "1px dashed white",
            borderRadius: "4px",
            height: "50%",
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "60px", padding: "20px", color: "white" }}>
            Tech Stack
          </h1>
          <div></div>
        </div>
      </div>

      {/* <div className="imageContainer">
        <img src="/newprofile.png" alt="processing" />
      </div> */}
    </div>
  );
}
