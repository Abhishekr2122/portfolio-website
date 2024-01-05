import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The Wild Oasis",
    desc: "Its an hotel management app ",
  },
  { id: 2, title: "The Fast Pizza App ", desc: "Its an pizza oedering app" },
  {
    id: 3,
    title: "Forkify",
    desc: "Its an food item receipe app",
  },
];

export default function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <div className="progressBar"></div>
      </div>
      {items.map(function (citem, i) {
        return <section>{citem.title}</section>;
      })}
    </div>
  );
}
