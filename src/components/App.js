import "./App.css";

import ButtonPanelComponent from "./button-panel.component";
import DisplayComponent from "./display.component";
import React from "react";

const App = () => {
  return (
    <React.Fragment className="App">
      <DisplayComponent />
      <ButtonPanelComponent />
    </React.Fragment>
  );
};

export default App;
