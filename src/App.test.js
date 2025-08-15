import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Projects section header", () => {
  render(<App />);
  const heading = screen.getByText(/Projects/i);
  expect(heading).toBeInTheDocument();
});
