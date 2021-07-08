import operate from "../operate";

describe("Operate logic", () => {
  it("should add", () => {
    const add = operate("1", "1", "+");
    expect(add).toBe("2");
  });
});
