import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  display: {
    height: "6rem",
    borderRadius: "1rem",
    color: "#ffffff",
    fontSize: "4rem",
    fontWeight: "bold",
    display: "flex",
    marginLeft: "1rem",
    alignItems: "center",
    textAlign: "right",
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
