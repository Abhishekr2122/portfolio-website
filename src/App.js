import { useState } from "react";
import "./app.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Main open={open} setOpen={setOpen} />
      </section>
      <section id="Projects">
        <Parallax />
      </section>
      <Projects />
      {/* <section id="Contact">
        <Contact />
      </section> */}
      <Toaster
        position="top-center"
        gutter={8}
        reverseOrder={false}
        toastOptions={{
          style: { backgroundColor: "white", color: "blueviolet" },
          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
