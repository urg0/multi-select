import React from "react";
import DropdownItem from "../dropdown-item/DropdownItem";

import "./DropdownList.css";

const DropdownList = ({
  list,
  selectCharacterHandler,
  isCharacterSelected,
  searchQuery,
  activeCharacterIndex,
}) => {
  return (
    <div className="dropdown-list">
      {list?.map(({ id, name, image, episode }) => {
        return (
          <DropdownItem
            key={name}
            name={name}
            image={image}
            episodeCount={episode.length}
            selectCharacterHandler={selectCharacterHandler}
            isCharacterSelected={isCharacterSelected}
            searchQuery={searchQuery}
            activeCharacterIndex={activeCharacterIndex}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default DropdownList;
