import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export default function Links() {
  const items = ["Homepage", "Projects", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map(function (citem, i) {
        return (
          <motion.a
            href={`#${citem}`}
            key={citem}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {citem}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
