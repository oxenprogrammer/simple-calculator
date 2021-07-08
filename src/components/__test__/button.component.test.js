import { render, unmountComponentAtNode } from "react-dom";

import ButtonComponent from "../button.component";
import React from "react";
import { act } from "react-dom/test-utils";

describe("Test Button Component", () => {
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

  it("should render a button", () => {
    act(() => {
      render(<ButtonComponent />, container);
    });
    expect(container.textContent).toBe("");

    act(() => {
      render(<ButtonComponent buttonName={"6"} />, container);
    });
    expect(container.textContent).toBe("6");

    act(() => {
      render(<ButtonComponent buttonName={"+/-"} />, container);
    });
    expect(container.textContent).toBe("+/-");
  });
});
