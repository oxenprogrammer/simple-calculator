import Big from "big-js";

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);

  switch (operation) {
    case "+":
      return bigNumberOne.plus(bigNumberTwo).toString();
    case "-":
      return bigNumberOne.minus(bigNumberTwo).toString();
    case "x":
      return bigNumberOne.times(bigNumberTwo).toString();
    case "÷":
      try {
        bigNumberOne.div(bigNumberTwo);
        return bigNumberOne.div(bigNumberTwo).toString();
      } catch (err) {
        return "Error, Division by 0 Forbidden";
      }
    case "%":
      return bigNumberOne.div(100).toString();
    default:
      return "0";
  }
};

export default operate;
