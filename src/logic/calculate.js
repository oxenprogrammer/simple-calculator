import operate from "./operate";

const calculate = (calculator = {}, buttonName) => {
  let { total, next, operation } = calculator;

  if (buttonName === "+/-") {
    return {
      ...calculator,
      total: total * -1,
      next: next * -1,
    };
  }

  return operate({ total, next, operation });
};

export default calculate;
