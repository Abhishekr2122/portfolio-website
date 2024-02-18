import "./parallax.scss";

export default function Parallax() {
  return (
    <div className="parallax">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "90px",
          }}
        >
          {[..."Projects"].map(function (citem, i) {
            return (
              <span
                style={{ color: `${i % 2 !== 0 ? "blueviolet" : "white"}` }}
              >
                {citem}
              </span>
            );
          })}
        </h1>
        <button
          style={{
            width: "50%",
            padding: "10px",
            backgroundColor: "transparent",
            color: "white",
            borderRadius: "4px",
            border: "1px dashed white",
          }}
        >
          <a
            href="https://github.com/Abhishekr2122?tab=repositories"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Click here
          </a>
        </button>
      </div>

      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
}
