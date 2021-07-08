import calculate from "../calculate";

describe("Test Calculate logic", () => {
  it("should display nothing with AC is pressed", () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(data, "AC")).toEqual(data);
  });
});
