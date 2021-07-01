import ButtonComponent from "./button.component";
import React from "react";

const ButtonPanelComponent = () => {
  return (
    <React.Fragment className="button-panel">
      <div className="group">
        <ButtonComponent buttonName="AC" />
        <ButtonComponent buttonName="+/-" />
        <ButtonComponent buttonName="%" />
        <ButtonComponent buttonName="÷" />
      </div>
      <div className="group">
        <ButtonComponent buttonName={7} />
        <ButtonComponent buttonName={8} />
        <ButtonComponent buttonName={9} />
        <ButtonComponent buttonName="X" />
      </div>
      <div className="group">
        <ButtonComponent buttonName={4} />
        <ButtonComponent buttonName={5} />
        <ButtonComponent buttonName={6} />
        <ButtonComponent buttonName="-" />
      </div>
      <div className="group">
        <ButtonComponent buttonName={1} />
        <ButtonComponent buttonName={2} />
        <ButtonComponent buttonName={3} />
        <ButtonComponent buttonName="+" />
      </div>
      <div className="group">
        <ButtonComponent buttonName={0} />
        <ButtonComponent buttonName="." />
        <ButtonComponent buttonName={"="} />
      </div>
    </React.Fragment>
  );
};

export default ButtonPanelComponent;
