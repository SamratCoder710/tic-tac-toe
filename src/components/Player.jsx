import { useState } from "react";

function Player({ name, symbol,active,onChangeName }) {
  console.log("Player")
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  const handleEditClick = () => {
    setIsEditing((prev) => !prev);

    if(isEditing){
      onChangeName(symbol,playerName);
    }
  };
  return (
    <li className={`${active?'active':''}`}>
      <span className={`player`}>
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => {setPlayerName(e.target.value)}}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
