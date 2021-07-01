import PropTypes from "prop-types";

const DisplayComponent = ({ result }) => {
  return <div className="display">{result}</div>;
};

DisplayComponent.defaultProps = {
  result: "O",
};

DisplayComponent.propTypes = { result: PropTypes.string.isRequired };

export default DisplayComponent;
