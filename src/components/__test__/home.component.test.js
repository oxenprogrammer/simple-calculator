import { render, screen } from "@testing-library/react";

import HomeComponent from "../home.component";

it("should have mathematics in home page", () => {
  render(<HomeComponent />);
  const mathematics = screen.getByText(/Mathematics/i);
  expect(mathematics).toBeInTheDocument();
});
