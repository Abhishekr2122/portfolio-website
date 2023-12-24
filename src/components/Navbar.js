import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Abhishek</span>
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
