import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../services/api.service";

import useClickOutside from "../../hooks/useClickOutside";
import useKeyboardNavigation from "../../hooks/UseKeyboardNavigation";

import DropdownList from "../dropdown/dropdown-list/DropdownList";
import SelectedCharacterItem from "../selected-character-item/SelectedCharacterItem";

import { ReactSVG } from "react-svg";
import Caret from "../../assets/icons/caret-up.svg";
import LoadingIcon from "../../assets/icons/loading.svg";

import "./MultiSelect.css";

const MultiSelect = () => {
  const {
    data: characters,
    isLoading,
    isError,
  } = useQuery("characters", getCharacters);

  const {
    dropdownRef,
    isDropdownOpen,
    toggleDropdownMenu,
    openDropdownMenu,
    closeDropdownMenu,
  } = useClickOutside();

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [activeCharacterIndex, setActiveCharacterIndex] = useState(0);

  const selectCharacterHandler = (name, isChecked) => {
    if (isChecked && name) {
      setSelectedCharacters((prevItems) => [...prevItems, name]);
    } else {
      setSelectedCharacters((prevItems) =>
        prevItems.filter((item) => item !== name)
      );
    }
  };

  const filteredData = characters?.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isCharacterSelected = (characterName) => {
    return selectedCharacters.includes(characterName);
  };

  const onSearchQueryChange = (event) => {
    openDropdownMenu(event);
    setSearchQuery(event.target.value);
  };

  const removeCharacter = (event, name) => {
    event.stopPropagation();
    const filteredCharacters = selectedCharacters?.filter((selectedName) => {
      return name !== selectedName;
    });
    setSelectedCharacters(filteredCharacters);
  };
  const keyDownHandler = useKeyboardNavigation(
    filteredData,
    activeCharacterIndex,
    setActiveCharacterIndex,
    selectCharacterHandler,
    isCharacterSelected,
    removeCharacter,
    openDropdownMenu,
    closeDropdownMenu
  );

  if (isError) {
    return <div>Something went wrong. {isError}</div>;
  }

  return (
    <div className="multi-select-container">
      <div className="input-container">
        {selectedCharacters?.map((character) => {
          return (
            <SelectedCharacterItem
              key={character}
              character={character}
              removeCharacter={removeCharacter}
            />
          );
        })}
        <div className="input-wrapper">
          <input
            type="text"
            className="multi-select-input"
            placeholder="Search any character..."
            onChange={onSearchQueryChange}
            onClick={openDropdownMenu}
            onKeyDown={keyDownHandler}
          />
          <ReactSVG
            src={Caret}
            className={isDropdownOpen ? "caret-icon-down" : "caret-icon"}
            onClick={toggleDropdownMenu}
          />
        </div>
      </div>
      {isDropdownOpen && (
        <div ref={dropdownRef}>
          <DropdownList
            list={filteredData}
            selectCharacterHandler={selectCharacterHandler}
            isCharacterSelected={isCharacterSelected}
            searchQuery={searchQuery}
            activeCharacterIndex={activeCharacterIndex}
          />
        </div>
      )}
      {!isLoading && filteredData?.length === 0 && (
        <div className="no-match">No character found. Misspell?</div>
      )}
      {isLoading && <ReactSVG src={LoadingIcon} className="loading-icon" />}
    </div>
  );
};

export default MultiSelect;
