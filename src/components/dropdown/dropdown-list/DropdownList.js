import React from "react";
import DropdownItem from "../dropdown-item/DropdownItem";

import "./DropdownList.css";

const DropdownList = ({
  list,
  selectHandler,
  isCharacterSelected,
  searchQuery,
}) => {
  return (
    <div className="dropdown-list">
      {list?.map(({ id, name, image, episode }) => {
        return (
          <DropdownItem
            key={id}
            name={name}
            image={image}
            episodeCount={episode.length}
            selectHandler={selectHandler}
            isCharacterSelected={isCharacterSelected}
            searchQuery={searchQuery}
          />
        );
      })}
    </div>
  );
};

export default DropdownList;
