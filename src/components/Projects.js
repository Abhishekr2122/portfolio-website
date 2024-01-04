import "./projects.scss";

const items = [
  {
    id: 1,
    title: "The Wild Oasis",
    desc: "Its an hotel management app ",
  },
  { id: 2, title: "The Fast Pizza App ", desc: "Its an pizza oedering app" },
  {
    id: 3,
    title: "Forkify",
    desc: "Its an food item receipe app",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      {items.map(function (citem, i) {
        return <section>{citem.title}</section>;
      })}
    </div>
  );
}
