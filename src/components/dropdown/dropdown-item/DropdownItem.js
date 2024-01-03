import React from "react";

import "./DropdownItem.css";
import { highlightMatchedText } from "../../../utils/utils.service";

const DropdownItem = ({
  name,
  image,
  episodeCount,
  id,
  selectCharacterHandler,
  isCharacterSelected,
  searchQuery,
  activeCharacterIndex,
}) => {
  const onSelect = () => {
    selectCharacterHandler(name, !isCharacterSelected(name));
  };

  return (
    <div
      className={`dropdown-item-container ${
        isCharacterSelected(name) && "selected"
      }`}
      onClick={onSelect}
    >
      <input
        type="checkbox"
        className="checkbox"
        onChange={onSelect}
        checked={isCharacterSelected(name)}
      />
      <img src={image} alt={name} loading="lazy" className="character-image" />
      <div className="info-container">
        <h2 className={`name ${activeCharacterIndex === id && "active"}`}>
          {highlightMatchedText(name, searchQuery)}
        </h2>
        <span className="episode-count">{episodeCount} Episodes</span>
      </div>
    </div>
  );
};

export default DropdownItem;
