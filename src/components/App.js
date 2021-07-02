import ButtonPanelComponent from "./button-panel.component";
import DisplayComponent from "./display.component";
import React from "react";
import calculate from "../logic/calculate";
import { withStyles } from "@material-ui/styles";

const styles = () => ({
  root: {
   border: "1px solid black",
   backgroundColor: "gray",
  },
});

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
    const { classes } = this.props;
    const { total, next } = this.state;
    const result = next ? next && next.toString() : total && total.toString();

    return (
      <React.Fragment>
        <div className={classes.root}>
          <DisplayComponent result={result} />
          <ButtonPanelComponent clickHandler={this.handleClick} />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
