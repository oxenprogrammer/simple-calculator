import ButtonComponent from "./button.component";
import Grid from '@material-ui/core/Grid';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <React.Fragment>
      {buttonNames.map((buttonName) => (
        <ButtonComponent
          clickHandler={clickHandler}
          buttonName={buttonName}
          key={buttonName}
        />
      ))}
    </React.Fragment>
  );
};

export default ButtonPanelComponent;
