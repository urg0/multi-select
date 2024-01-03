import React from "react";

import MultiSelect from "./components/multi-select/MultiSelect";

import Rick from "./assets/images/rick2.png";

const App = () => {
  return (
    <div className="app-container">
      <img src={Rick} alt="rick" className="rick" />
      <MultiSelect />
    </div>
  );
};

export default App;
