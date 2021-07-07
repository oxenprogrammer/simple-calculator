import ButtonComponent from "./button.component";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gridGap: 2,
  },
}));

const ButtonPanelComponent = ({ clickHandler }) => {
  const buttonNames = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {buttonNames.map((buttonName) => (
        <ButtonComponent
          clickHandler={clickHandler}
          buttonName={buttonName}
          key={buttonName}
        />
      ))}
    </Grid>
  );
};

export default ButtonPanelComponent;
