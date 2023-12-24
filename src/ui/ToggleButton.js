export default function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={function () {
        setOpen(function (prevstate) {
          return !prevstate;
        });
      }}
    >
      Button
    </button>
  );
}
