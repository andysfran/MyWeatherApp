import React from "react";
import { Card } from "../../components/Card/Card.styles";
import { render, screen } from "../../utils/test-utils";

test("Check if Card component renders correctly", () => {
  render(
    <Card>
      <p>Simple card</p>
    </Card>
  );
  const pText = screen.getByText(/Simple card/i);
  expect(pText).toBeInTheDocument();
});
