import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  display: {
    height: "5rem",
    borderRadius: "1rem",
    color: "#ffffff",
    fontSize: "2rem",
    display: "flex",
    marginLeft: "1rem",
    alignItems: "center",
  },
}));

const DisplayComponent = ({ result }) => {
  const classes = useStyles();
  return <div className={classes.display}>{result}</div>;
};

DisplayComponent.defaultProps = {
  result: "0",
};

DisplayComponent.propTypes = { result: PropTypes.string };

export default DisplayComponent;
