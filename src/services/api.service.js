const api = process.env.REACT_APP_API_URL;

export const getCharacters = async () => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const json = await response.json();
  return json.results;
};
