import React, { ReactElement, useCallback, useEffect, useState } from "react";

import {
  DefaultProps,
  ForecastDataStateType,
  LocationDataStateType,
} from "../../types";
import { fetchForecast } from "../../api";
import { useModal, useLocationData } from "../../hooks";

import * as S from "./App.styles";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import Modal from "../Modal/Modal";
import LocationBookmarks from "../LocationBookmarks/LocationBookmarks";

const App: DefaultProps = (): ReactElement => {
  const { toggle, isShowing } = useModal();
  const { locationData, setLocationData } = useLocationData();
  const [forecastData, setForecastData] = useState<ForecastDataStateType>({});

  const getForecastData = useCallback(async () => {
    const { status, data } = await fetchForecast(
      locationData.lat,
      locationData.lon
    );
    if (status === 200) {
      setForecastData({
        temperature: parseInt(data?.current.temp),
        icon: data?.current.weather[0].icon,
        daily: data?.daily,
      });
    }
  }, [locationData.lat, locationData.lon]);

  useEffect(() => {
    if (locationData.lat && locationData.lon) {
      getForecastData().then();
    }
  }, [locationData, getForecastData]);

  const renderForecastData = () => {
    if (Object.keys(forecastData).length > 0) {
      return (
        <>
          <WeatherCard
            locationName={locationData.name}
            temperature={forecastData.temperature || ""}
            icon={forecastData.icon}
          />
          <S.NextForecastText>7 day weather forecast:</S.NextForecastText>
          <S.NextForecastContainer>
            {forecastData.daily?.map(
              (day, index) =>
                index >= 1 && (
                  <WeatherCard
                    key={day.dt}
                    locationName={locationData.name}
                    date={day.dt}
                    icon={day.weather[0].icon}
                    temperature={parseInt(day.temp.day)}
                    minTemperature={parseInt(day.temp.min)}
                    maxTemperature={parseInt(day.temp.max)}
                  />
                )
            )}
          </S.NextForecastContainer>
        </>
      );
    }
    return null;
  };

  const onSelectCity = (city: LocationDataStateType) => {
    setLocationData(city);
    toggle();
  };

  return (
    <S.AppContainer>
      <Header onOpenBookmarks={toggle} />
      <S.ContentContainer>{renderForecastData()}</S.ContentContainer>
      <Modal title="Bookmarks" isShowing={isShowing} hide={toggle}>
        <LocationBookmarks onSelectCity={onSelectCity} />
      </Modal>
    </S.AppContainer>
  );
};

export default App;
