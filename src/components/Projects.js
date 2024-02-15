import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The Wild Oasis",
    desc: "Its an hotel management app ",
    image: "/worldwise.png",
  },
  {
    id: 2,
    title: "The Fast Pizza App ",
    desc: "Its an pizza oedering app",
    image: "/projectsscreenshot2.png",
  },
  {
    id: 3,
    title: "Forkify",
    desc: "Its an food item receipe app",
    image: "/forkify.png",
  },
];

export default function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(function (citem, i) {
        return <section>{citem.title}</section>;
      })}
    </div>
  );
}
