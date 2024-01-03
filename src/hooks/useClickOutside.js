import { useState, useEffect, useRef } from "react";

const useClickOutside = (initialState = false) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(initialState);
  const dropdownRef = useRef();

  const handleClickOutside = (event) => {
    //NOTE: checks whether user click outside the dropdown menu
    if (!dropdownRef?.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const openDropdownMenu = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(true);
  };
  const closeDropdownMenu = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdownMenu = (event) => {
    event.stopPropagation();
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return {
    dropdownRef,
    isDropdownOpen,
    toggleDropdownMenu,
    openDropdownMenu,
    closeDropdownMenu,
  };
};

export default useClickOutside;
