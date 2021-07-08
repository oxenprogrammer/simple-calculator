import { render, unmountComponentAtNode } from "react-dom";

import DisplayComponent from "../display.component";
import React from "react";
import { act } from "react-dom/test-utils";

describe("Test Display Component", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should render a result", () => {
    act(() => {
      render(<DisplayComponent />, container);
    });
    expect(container.textContent).toBe("0");

    act(() => {
      render(<DisplayComponent result={"9"} />, container);
    });
    expect(container.textContent).toBe("9");

    act(() => {
      render(<DisplayComponent result={"120"} />, container);
    });
    expect(container.textContent).toBe("120");
  });
});
