import "./app.scss";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SideBarProvider from "./contexts/SideBarProvider";

function App() {
  return (
    <div>
      <section id="Homepage">
        <SideBarProvider>
          <Navbar />
          <Main />
        </SideBarProvider>
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
