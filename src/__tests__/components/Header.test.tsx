import React from "react";
import { render, screen } from "../../utils/test-utils";
import Header from "../../components/Header/Header";

test("Check if Header renders correctly", () => {
  render(<Header onOpenBookmarks={() => {}} />);
  const textElement = screen.getByText(/My Weather App/i);
  expect(textElement).toBeInTheDocument();
});

test("Check if Header fires the callback properly", () => {
  const fakeOpenBookmarks = jest.fn();
  render(<Header onOpenBookmarks={fakeOpenBookmarks} />);
  const textElement = screen.getByText(/Bookmarks/i);
  textElement.click();
  expect(fakeOpenBookmarks).toBeCalledTimes(1);
});
