import "./main.scss";
import { motion } from "framer-motion";
import { GrHtml5 } from "react-icons/gr";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandSupabase } from "react-icons/tb";

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
            flexDirection: "column",
            alignItems: "center",
            gap: "20%",
          }}
        >
          <h1
            style={{
              fontSize: "65px",
              color: "white",
              borderBottom: "1px dashed white",
              width: "100%",
              textAlign: "center",
              fontWeight: "lighter",
            }}
          >
            Tech Stack
          </h1>
          <div
            style={{
              color: "white",

              display: "flex",
              gap: "20px",
            }}
          >
            <FaJava
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <GrHtml5
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <TbBrandCss3
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <TbBrandJavascript
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <RiBootstrapLine
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <FaSass
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <TbBrandTailwind
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <FaReact
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
            <TbBrandSupabase
              style={{ height: "50px", width: "50px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {/* <div className="imageContainer">
        <img src="/newprofile.png" alt="processing" />
      </div> */}
    </div>
  );
}
