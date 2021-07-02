import "./App.css";

import ButtonPanelComponent from "./button-panel.component";
import DisplayComponent from "./display.component";
import React from "react";
// eslint-disable-next-line no-unused-vars
import calculate from "../logic/calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    handleClick = (buttonName) => {
      const calculator = calculate(this.state, buttonName);
      this.setState({ ...calculator });
    };

    return (
      <React.Fragment className="App">
        <DisplayComponent />
        <ButtonPanelComponent />
      </React.Fragment>
    );
  }
}

export default App;
