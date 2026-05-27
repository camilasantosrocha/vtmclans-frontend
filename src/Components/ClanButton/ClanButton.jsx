import "./ClanButton.css";

function ClanButton({ text, onClick }) {
  return (
    <button className="clan-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default ClanButton;