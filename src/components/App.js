import React, { useState } from "react";

import ButtonPanelComponent from "./button-panel.component";
import DisplayComponent from "./display.component";
import calculate from "../logic/calculate";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid black",
    backgroundColor: "gray",
    width: "29rem",
    justifyContent: "center",
    alignSelf: "center",
    "@media(max-width: 480px)": {
      width: "20rem",
    }
  },
}));

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = state;
  const handleClick = (buttonName) => {
    const calculator = calculate(state, buttonName);
    setState({ ...calculator });
  };

  const classes = useStyles();
  const result = next ? next && next.toString() : total && total.toString();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <DisplayComponent result={result} />
        <ButtonPanelComponent clickHandler={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default App;
