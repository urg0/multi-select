import { useEffect, useRef } from "react";

const useScrollIntoView = (isActive) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({
        block: "nearest",
      });
    }
  }, [isActive]);

  return itemRef;
};

export default useScrollIntoView;
