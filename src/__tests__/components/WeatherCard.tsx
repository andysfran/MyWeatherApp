import React from "react";
import { render, screen } from "../../utils/test-utils";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

test("Check if WeatherCard renders correctly", () => {
  render(<WeatherCard locationName="Porto" temperature={25} />);
  const locationText = screen.getByText(/Porto/i);
  const temperatureText = screen.getByText(/25ºC/i);
  expect(locationText).toBeInTheDocument();
  expect(temperatureText).toBeInTheDocument();
});

test("Check if WeatherCard renders correctly with current, min and max temp of the day", () => {
  render(
    <WeatherCard
      locationName="Paris"
      temperature={25}
      minTemperature={20}
      maxTemperature={27}
    />
  );
  const locationText = screen.getByText(/Paris/i);
  const temperatureText = screen.getByText(/25ºC/i);
  const minTemperatureText = screen.getByText(/20ºC/i);
  const maxTemperatureText = screen.getByText(/27ºC/i);
  expect(locationText).toBeInTheDocument();
  expect(temperatureText).toBeInTheDocument();
  expect(minTemperatureText).toBeInTheDocument();
  expect(maxTemperatureText).toBeInTheDocument();
});
