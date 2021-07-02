import PropTypes from "prop-types";

const ButtonComponent = ({ buttonName, clickHandler }) => {
  return (
    <button
      type="button"
      onClick={() => clickHandler(buttonName)}
      className="button"
    >
      {buttonName}
    </button>
  );
};

ButtonComponent.propTypes = { buttonName: PropTypes.string };
export default ButtonComponent;
