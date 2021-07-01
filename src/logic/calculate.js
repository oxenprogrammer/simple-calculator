import operate from "./operate";

const calculate = (calculator = {}, buttonName) => {
  let { total, next, operation } = calculator;
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "X", "÷", "%"];

  if (buttonName === "+/-") {
    return {
      ...calculator,
      total: total * -1,
      next: next * -1,
    };
  }

  if (buttonName === "AC") {
    return {
      ...calculator,
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === ".") {
    if (operation === null) {
      return {
        ...calculator,
        total: total === null ? buttonName : total + buttonName,
      };
    }
    return {
      ...calculator,
      next: next === null ? buttonName : next + buttonName,
    };
  }

  if (numbers.includes(buttonName)) {
    while (next === null) {
      next = "";
    }
    next += buttonName;
  }

  if (operators.includes(buttonName)) {
    while (next !== null && operation !== null) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
      operation = null;
    }
    while (next !== null) {
      total = next;
      next = null;
    }
    if (next == null || operation == null) {
      operation = buttonName;
    }
  }

  if (buttonName === "=") {
    const result = operate(total, next, operation);
    return {
      ...calculator,
      total: result,
      next: null,
      operation: null,
    };
  }

  if (buttonName === "%") {
    return {
      ...calculator,
      total: total / 100,
      next: next / 100,
    };
  }

  return { total, next, operation };
};

export default calculate;
