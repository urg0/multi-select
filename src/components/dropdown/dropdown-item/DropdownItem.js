import React, { useEffect, useState } from "react";

import "./DropdownItem.css";
import { highlightMatchedText } from "../../../utils/utils.service";

const DropdownItem = ({
  name,
  image,
  episodeCount,
  selectHandler,
  isCharacterSelected,
  searchQuery,
}) => {
  const [isChecked, setIsChecked] = useState(isCharacterSelected(name));

  useEffect(() => {
    setIsChecked(isCharacterSelected(name));
  }, [name, isCharacterSelected]);

  const onSelect = () => {
    selectHandler(name, !isChecked);
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className={`dropdown-item-container ${isChecked && "selected"} `}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={onSelect}
        checked={isChecked}
      />
      <img src={image} alt="test" className="character-image" />
      <div className="info-container">
        <h2 className="name">{highlightMatchedText(name, searchQuery)}</h2>
        <span className="episode-count">{episodeCount} Episodes</span>
      </div>
    </div>
  );
};

export default DropdownItem;
