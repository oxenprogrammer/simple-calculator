import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = numberOne ? Big(numberOne) : null;
  const bigNumberTwo = numberTwo ? Big(numberTwo) : null;

  switch (operation) {
    case "+":
      return bigNumberOne.plus(bigNumberTwo).toString();
    case "-":
      return bigNumberOne.minus(bigNumberTwo).toString();
    case "X":
      return bigNumberOne.times(bigNumberTwo).toString();
    case "÷":
      try {
        bigNumberOne.div(bigNumberTwo);
        return Math.round(bigNumberOne.div(bigNumberTwo)*1000000.0)/1000000.0.toString();
      } catch (err) {
        return "Error, Division by 0 Forbidden";
      }
    case "%":
      return bigNumberOne.mod(bigNumberTwo).toString();
    default:
      return "0";
  }
};

export default operate;
