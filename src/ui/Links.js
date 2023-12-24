export default function Links() {
  const items = ["Homepage", "Projects", "Contact"];
  return (
    <div className="links">
      {items.map(function (citem, i) {
        return (
          <a href={`#${citem}`} key={citem}>
            {citem}
          </a>
        );
      })}
    </div>
  );
}
