import "./Topbar.css";

function Topbar({ titulo }) {
  return (
    <header className="topbar">
      <h1>{titulo}</h1>
      <img src="avatar.svg" alt="Avatar" />
    </header>
  );
}

export default Topbar;