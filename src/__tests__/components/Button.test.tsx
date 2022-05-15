import React from "react";
import { render, screen } from "../../utils/test-utils";
import Button from "../../components/Button/Button";

test("Check if the Button component renders properly", () => {
  render(<Button variation="light">Light button</Button>);
  expect(screen.getByText(/Light button/i)).toBeInTheDocument();
});

test("Check if the Button variations: Primary", () => {
  render(<Button variation="primary">Primary button</Button>);
  const btnEl = screen.getByText(/Primary button/i);
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveStyle("background-color: rgb(45, 152, 218);");
});

test("Check if the Button variations: Danger", () => {
  render(<Button variation="danger">Danger button</Button>);
  const btnEl = screen.getByText(/Danger button/i);
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveStyle("background-color: rgb(235, 59, 90);");
});
