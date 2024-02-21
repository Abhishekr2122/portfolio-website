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
        <div className="iconContainer">
          <div className="mainIconContainer">
            <div className="subIconContainer">
              <GrHtml5 className="icon" id="html" />
              <TbBrandCss3 className="icon" id="css" />
              <TbBrandJavascript className="icon" id="javascript" />
              <FaReact className="icon" id="react" />
            </div>
            <div className="subIconContainer">
              <RiBootstrapLine className="icon" id="bootstrap" />
              <FaSass className="icon" id="sass" />
              <TbBrandTailwind className="icon" id="tailwind" />
            </div>
            <div className="subIconContainer">
              <TbBrandSupabase className="icon" id="supabase" />
              <FaJava className="icon" id="java" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="imageContainer">
        <img src="/newprofile.png" alt="processing" />
      </div> */}
    </div>
  );
}
