export const highlightMatchedText = (name, query) => {
  if (!query) return name;

  //NOTE: Regular expression to find the highlighted term for each query.
  const regex = new RegExp(`(${query})`, "gi");

  const parts = name.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? <strong key={index}>{part}</strong> : part
  );
};
