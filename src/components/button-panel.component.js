import ButtonComponent from "./button.component";
import React from "react";

const ButtonPanelComponent = ({ handleClick }) => {
  const buttonNames = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "x",
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
    <React.Fragment className="button-panel">
      {buttonNames.map((buttonName) => (
        <ButtonComponent
          clickHandler={handleClick}
          buttonName={buttonName}
          key={buttonName}
        />
      ))}
    </React.Fragment>
  );
};

export default ButtonPanelComponent;
