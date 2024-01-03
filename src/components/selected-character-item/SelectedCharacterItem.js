import React from "react";
import { ReactSVG } from "react-svg";

import Delete from "../../assets/icons/delete.svg";

import "./SelectedCharacterItem.css";

const SelectedCharacterItem = ({ character, removeCharacter }) => {
  return (
    <div key={character} className="selected-input">
      <span key={character}>{character}</span>
      <button
        className="remove-button"
        onClick={(event) => removeCharacter(event, character)}
      >
        <ReactSVG src={Delete} className="delete-icon" />
      </button>
    </div>
  );
};

export default SelectedCharacterItem;
