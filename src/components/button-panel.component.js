import ButtonComponent from "./button.component";
import React from "react";

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
