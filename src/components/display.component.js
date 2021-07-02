import PropTypes from "prop-types";

const DisplayComponent = ({ result }) => {
  return <div className="display">{result}</div>;
};

DisplayComponent.defaultProps = {
  result: "0",
};

DisplayComponent.propTypes = { result: PropTypes.string };

export default DisplayComponent;
