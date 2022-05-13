import React from 'react';
import { render, screen } from '../../utils/test-utils';
import Header from "../../components/Header/Header";

test('Check if Header renders correctly', () => {
  render(<Header />);
  const textElement = screen.getByText(/My Weather App/i);
  expect(textElement).toBeInTheDocument();
});
