import React, { ReactElement, useEffect, useState } from "react";

import { DefaultProps } from "../../types";
import Header from "../Header/Header";
import * as S from "./App.styles";
import WeatherCard from "../WeatherCard/WeatherCard";
import { fetchForecast } from "../../api";

const App: DefaultProps = ({ children }): ReactElement => {
  const [readyToFetch, setReadyToFetch] = useState<boolean>(false);
  const [locationData, setLocationData] = useState({
    lat: "38.7259284",
    lon: "-9.137382",
    name: "Lisbon, Portugal",
  });
  const [forecastData, setForecastData] = useState<{
    temperature?: number;
    daily?: Record<string, any>[];
  }>({});

  useEffect(() => {
    if (!readyToFetch) getUserLocation();
  });

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLocationData({
          lat: `${coords.latitude}`,
          lon: `${coords.longitude}`,
          name: "Current location",
        });
      });
    }
    setReadyToFetch(true);
    getForecastData().then();
  };

  const getForecastData = async () => {
    const { status, data } = await fetchForecast(
      locationData.lat,
      locationData.lon
    );
    if (status === 200) {
      setForecastData({
        temperature: parseInt(data?.current.temp),
        daily: data?.daily,
      });
    }
  };

  const renderForecastData = () => {
    if (Object.keys(forecastData).length > 0) {
      return (
        <>
          <WeatherCard
            locationName={locationData.name}
            temperature={forecastData.temperature || ""}
          />
          <S.NextForecastText>7 day weather forecast:</S.NextForecastText>
          <S.NextForecastContainer>
            {forecastData.daily?.map(
              (day, index) =>
                index > 0 && (
                  <WeatherCard
                    key={day.dt}
                    locationName={locationData.name}
                    date={day.dt}
                    temperature={parseInt(day.temp.day)}
                  />
                )
            )}
          </S.NextForecastContainer>
        </>
      );
    }
    return null;
  };

  return (
    <S.AppContainer>
      <Header />
      <S.ContentContainer>{renderForecastData()}</S.ContentContainer>
    </S.AppContainer>
  );
};

export default App;
