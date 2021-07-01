import PropTypes from "prop-types";

const ButtonComponent = ({ buttonName }) => {
  return <div className="button">{buttonName}</div>;
};

ButtonComponent.propTypes = { buttonName: PropTypes.string };
export default ButtonComponent;
