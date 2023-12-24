import { useSidebar } from "../contexts/SideBarProvider";
import "./main.scss";

export default function Main() {
  const { open } = useSidebar();
  return (
    <div className="main">
      <div className="wrapper">
        <div className={`textContainer ${open ? "activeTextContainer" : ""} `}>
          <h2>Abhishek Shinde</h2>
          <h1>Web developer</h1>
          <div className="buttons">
            <button>See the Latest works</button>
            <button>Download my resume</button>
          </div>
        </div>
      </div>
      {/* <div className="imageContainer">
        <img src="/newprofile.png" alt="processing" />
      </div> */}
    </div>
  );
}
