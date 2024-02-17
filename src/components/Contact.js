import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's Connect</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>abhishekrshinde21@gmail.com</span>
        </div>
        <div className="item">
          <h2>Linkdln</h2>
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
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
