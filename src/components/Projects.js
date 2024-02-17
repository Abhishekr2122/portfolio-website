import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "The Wild Oasis",
    desc: "Its an hotel management app dadadaaj ajdajdajdajdajkdjada dbakbakdbakdbakdbakdbakdbakbkc C C bCB BC JC zJC bCb",
    image: "/worldwise.png",
    href: "https://the-wild-oasis-react-app.netlify.app/",
  },
  {
    id: 2,
    title: "The Fast Pizza App ",
    desc: "Its an pizza ordering app dadjajsfjsafsajfsajfjsfja lorem10adadadadadadadadadadad",
    image: "/projectscreenshot2.png",
    href: "https://fast-pizza-react-app.netlify.app/",
  },
  {
    id: 3,
    title: "Forkify",
    desc: "Its an food item receipe app dabajdbadbajdbadb jadajbdjabdjabdkadbkdbakdb adbakdbakdbakdbakdbakdadabdahbbcajJAcjaa",
    image: "/forkify.png",
    href: "https://forkify-234dvc.netlify.app/",
  },
];

const Single = function ({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-115, 115]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="no data found" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.href} target="_blank" rel="noreferrer">
              <button>Live project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
        return <Single item={citem} />;
      })}
    </div>
  );
}
