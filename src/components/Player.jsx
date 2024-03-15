import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditting) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  function handleEditClick() {
    setIsEditting((editting) => !editting);

    if (isEditting) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
