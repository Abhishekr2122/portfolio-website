import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's Connect</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>abhishekrshinde21@gmail.com</span>
        </div>
        <div className="item">
          <h2>Linkedin</h2>
          <span>
            <a
              href="https://www.linkedin.com/in/abhishek-shinde1/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "blueviolet" }}
            >
              Abhishek Shinde
            </a>
          </span>
        </div>
        <div className="item">
          <h2>Github</h2>
          <span>
            <a
              href="https://github.com/Abhishekr2122"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "blueviolet" }}
            >
              Abhishekr2122
            </a>
          </span>
        </div>
        <div className="item">
          <h2>Phone-number</h2>
          <span>7720960310</span>
        </div>
      </div>
      <div className="formContainer">
        <form
          onSubmit={function (e) {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={function (e) {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            onChange={function (e) {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <textarea rows={8} placeholder="Message" />
          <button
            onClick={function () {
              console.log(name, email);
              if (name.length > 0 && email.length > 0) {
                setName("");
                setEmail("");
              }
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
