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
  
  handleClick = (buttonName) => {
    const calculator = calculate(this.state, buttonName);
    this.setState({ ...calculator });
  };

  render() {

    const { total, next, operation } = this.state;
    let result;
    result = operation === null? total : next === null ? operation : next;

    return (
      <React.Fragment className="App">
        <DisplayComponent result={result} />
        <ButtonPanelComponent clickHandler={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;
