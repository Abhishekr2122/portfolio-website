import Links from "./Links";
import ToggleButton from "./ToggleButton";
import "./sidebar.scss";
import { motion } from "framer-motion";

export default function Sidebar({ open, setOpen }) {
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        delay: 0.1,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
