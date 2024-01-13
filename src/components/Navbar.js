import Sidebar from "../ui/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
export default function Navbar({ open, setOpen }) {
  return (
    <div className="navbar">
      {/* <Sidebar open={open} setOpen={setOpen} /> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Abhishek Shinde
        </motion.span>
        <div className="socials">
          <a href="#">
            <img src="/dribbble.png" alt="processing" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="processing" />
          </a>
        </div>
      </div>
    </div>
  );
}
