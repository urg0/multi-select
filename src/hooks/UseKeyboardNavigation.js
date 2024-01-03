import { useCallback } from "react";

const useKeyboardNavigation = (
  characters,
  activeCharacterIndex,
  setActiveCharacterIndex,
  selectCharacterHandler,
  isCharacterSelected,
  removeCharacter,
  openDropdownMenu,
  closeDropdownMenu
) => {
  const keyDownHandler = useCallback(
    (event) => {
      openDropdownMenu(event);
      switch (event.key) {
        case "ArrowUp":
          if (activeCharacterIndex > 0) {
            event.preventDefault();
            setActiveCharacterIndex((prevState) => prevState - 1);
          }
          break;
        case "ArrowDown":
        case "Tab":
          event.preventDefault();
          if (activeCharacterIndex < characters.length - 1) {
            setActiveCharacterIndex((prevState) => prevState + 1);
          } else {
            setActiveCharacterIndex(0);
          }
          break;
        case "Enter":
          if (activeCharacterIndex >= 0) {
            const characterName = characters[activeCharacterIndex - 1]?.name;
            selectCharacterHandler(
              characterName,
              !isCharacterSelected(characterName)
            );
          }
          break;
        case "Backspace":
          const characterName = characters[activeCharacterIndex - 1]?.name;
          removeCharacter({ stopPropagation: () => {} }, characterName);
          break;
        case "Escape":
          closeDropdownMenu();
          setActiveCharacterIndex(0);
          break;
        default:
          break;
      }
    },
    [
      characters,
      activeCharacterIndex,
      setActiveCharacterIndex,
      selectCharacterHandler,
      isCharacterSelected,
      removeCharacter,
      openDropdownMenu,
      closeDropdownMenu,
    ]
  );

  return keyDownHandler;
};

export default useKeyboardNavigation;
