import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import DropdownList from "../dropdown/dropdown-list/DropdownList";
import Caret from "../../assets/icons/caret-up.svg";

import "./MultiSelect.css";
import SelectedCharacterItem from "../selected-character-item/SelectedCharacterItem";

const url = "https://rickandmortyapi.com/api/character/";

const MultiSelect = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError(true);
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Something went wrong:", error);
        setError("Something went wrong.");
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const selectHandler = (name, isChecked) => {
    if (isChecked) {
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

  const removeCharacter = (name) => {
    const filteredCharacters = selectedCharacters?.filter((selectedName) => {
      return name !== selectedName;
    });
    setSelectedCharacters(filteredCharacters);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="multi-select-container">
      <div className="input-container">
        {selectedCharacters?.map((character) => {
          return (
            <SelectedCharacterItem
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
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={() => setIsDropdownVisible(true)}
          />
          <ReactSVG
            src={Caret}
            className={isDropdownVisible ? "caret-icon-down" : "caret-icon"}
            onClick={toggleDropdown}
          />
        </div>
      </div>
      {isDropdownVisible && (
        <DropdownList
          list={filteredData}
          selectHandler={selectHandler}
          isCharacterSelected={isCharacterSelected}
          searchQuery={searchQuery}
        />
      )}
      {!loading && filteredData?.length === 0 && (
        <div className="no-match">No character found. Misspell?</div>
      )}
      {loading && <div>Loading</div>}
    </div>
  );
};

export default MultiSelect;
