import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    height: "5rem",
    width: "5rem",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '&:nth-child(4n), &:last-child': {
      backgroundColor: "#ff8b3d",
      color: "#ffffff",
      
    },
    '&:last-child': {
      width: "200%",
    }
  },
}));

const ButtonComponent = ({ buttonName, clickHandler }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.button}
      type="button"
      onClick={() => clickHandler(buttonName)}
    >
      {buttonName}
    </Button>
  );
};

ButtonComponent.propTypes = { buttonName: PropTypes.string };
export default ButtonComponent;
