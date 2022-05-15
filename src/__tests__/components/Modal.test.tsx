import React from "react";
import { render, screen } from "../../utils/test-utils";
import Modal from "../../components/Modal/Modal";

test("Check if Modal renders correctly", () => {
  render(
    <div>
      <Modal isShowing={true} title="Test Modal" />
    </div>
  );
  const modalTitle = screen.getByText(/Test Modal/i);
  expect(modalTitle).toBeInTheDocument();
});

test("Check if Modal hide function was called correctly", () => {
  const hideFunction = jest.fn();
  render(
    <div>
      <Modal isShowing={true} title="Test Modal" hide={hideFunction} />
    </div>
  );
  const modalTitle = screen.getByText(/Test Modal/i);
  const buttonClose = screen.getByText(/Close/i);
  buttonClose.click();

  expect(modalTitle).toBeInTheDocument();
  expect(hideFunction).toBeCalledTimes(1);
});
