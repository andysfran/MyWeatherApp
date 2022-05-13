import React from 'react';
import { render, screen } from '../../utils/test-utils';
import WeatherCard from "../../components/WeatherCard/WeatherCard";

test('Check if WeatherCard renders correctly', () => {
  render(
    <WeatherCard
      locationName="Porto"
      temperature={25}
    />
  );
  const locationText = screen.getByText(/Porto/i);
  const temperatureText = screen.getByText(/25ºC/i);
  expect(locationText).toBeInTheDocument();
  expect(temperatureText).toBeInTheDocument();
});
