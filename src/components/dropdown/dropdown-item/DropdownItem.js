import { highlightMatchedText } from "../../../utils/utils.service";
import useScrollIntoView from "../../../hooks/useScrolIntoView";

import "./DropdownItem.css";

const DropdownItem = ({
  index,
  name,
  image,
  episodeCount,
  selectCharacterHandler,
  isCharacterSelected,
  searchQuery,
  activeCharacterIndex,
}) => {
  const isActive = activeCharacterIndex === index;

  const activeCharacterRef = useScrollIntoView(isActive);

  const onSelect = () => {
    selectCharacterHandler(name, !isCharacterSelected(name));
  };

  return (
    <div
      className={`dropdown-item-container ${
        isCharacterSelected(name) && "selected"
      }`}
      onClick={onSelect}
      ref={activeCharacterRef}
    >
      <input
        type="checkbox"
        className="checkbox"
        onChange={onSelect}
        checked={isCharacterSelected(name)}
      />
      <img src={image} alt={name} loading="lazy" className="character-image" />
      <div className="info-container">
        <h2 className={`name ${activeCharacterIndex === index && "active"}`}>
          {highlightMatchedText(name, searchQuery)}
        </h2>
        <span className="episode-count">{episodeCount} Episodes</span>
      </div>
    </div>
  );
};

export default DropdownItem;
