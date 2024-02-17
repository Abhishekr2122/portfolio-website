import { useState } from "react";
import "./app.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section id="Homepage">
        <Navbar open={open} setOpen={setOpen} />
        <Main open={open} setOpen={setOpen} />
      </section>
      <section id="Projects">
        <Parallax />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
