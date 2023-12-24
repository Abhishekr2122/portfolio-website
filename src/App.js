import "./app.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Main />
      </section>
      <section id="Projects">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
