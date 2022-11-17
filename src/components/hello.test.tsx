import { render, screen } from "@testing-library/react";
import { Hello } from "./hello";

test("hello renders correctly", () => {
  render(<Hello />);
  const testElement = screen.getByText(/hey/i);
  expect(testElement).toBeInTheDocument();
});

test("hello renders with a name", () => {
  render(<Hello name="Arthur" />);

  const testElement = screen.getByText(/hey Arthur/i);
  expect(testElement).toBeInTheDocument();
});
