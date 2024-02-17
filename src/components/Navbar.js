import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { LiaGoogleDrive } from "react-icons/lia";
import { VscRepo } from "react-icons/vsc";
import "./navbar.scss";

const navItems = [
  { text: "Home", id: "#Homepage" },
  { text: "Projects", id: "#Projects" },
  { text: "Contact", id: "#Contact" },
  { text: "Socials", id: "#Contact" },
];

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navItems">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "100px",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          {navItems.map(function (citem, i) {
            return (
              <li key={i}>
                <a
                  href={citem.id}
                  style={{ textDecoration: "none", color: "blueviolet" }}
                >
                  {citem.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="socials">
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-shinde1/"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin
              style={{ height: "25px", width: "25px", color: "white" }}
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Abhishekr2122"
            target="_blank"
            rel=" noreferrer"
          >
            <IoLogoGithub
              style={{ height: "25px", width: "25px", color: "white" }}
            />
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/drive/folders/1ELpIuV8Q0g54dKWA24jzhXlk7k8zpD4M"
            target="_blank"
            rel="noreferrer"
          >
            <LiaGoogleDrive
              style={{ height: "25px", width: "25px", color: "white" }}
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/Abhishekr2122?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <VscRepo
              style={{ height: "25px", width: "25px", color: "white" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
