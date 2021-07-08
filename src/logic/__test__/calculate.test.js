import calculate from "../calculate";

describe("Calculate logic", () => {
  it("should display nothing with AC is pressed", () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(data, "AC")).toEqual(data);
  });

  it("should add two numbers", () => {
    const data = { total: 5, next: 5, operation: "+" };
    const newData = calculate(data, "=");
    expect(newData.total).toEqual("10");
  });

  it("should multiple numbers", () => {
    const data = { total: 5, next: 5, operation: "X" };
    const newData = calculate(data, "=");
    expect(newData.total).toEqual("25");
  });

  it("should subtract numbers", () => {
    const data = { total: 17, next: 5, operation: "-" };
    const newData = calculate(data, "=");
    expect(newData.total).toEqual("12");
  });

  it("should divide numbers", () => {
    const data = { total: 12, next: 5, operation: "÷" };
    const newData = calculate(data, "=");
    expect(newData.total).toEqual(2.4);
  });
});
