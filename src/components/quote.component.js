import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import qoute from "../assets/img/qoute.jpg";

const useStyles = makeStyles(() => ({
  card: {
    "@media(max-width: 480px)": {
      width: "90%",
    },
  },
}));

const QuoteComponent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <img src={qoute} alt={"Beauty of mathematics"} />
    </Card>
  );
};

export default QuoteComponent;
