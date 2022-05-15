import React from "react";

import { WeatherCardPropsType } from "../../types";
import { getFormatedDate } from "../../utils/dataFormat";

import { Card } from "../Card/Card.styles";
import * as S from "./WeatherCard.styles";

const WeatherCard = ({
  locationName,
  temperature,
  date,
  minTemperature,
  maxTemperature,
  icon,
}: WeatherCardPropsType) => {
  const getIconUrl = (): string =>
    `${process.env.REACT_APP_OPEN_WEATHER_IMAGES_BASE_URL}/${icon}@2x.png`;

  return (
    <Card>
      <S.LocationText>{locationName}</S.LocationText>
      {date && <S.DateText>{getFormatedDate(date)}</S.DateText>}
      <S.TemperatureContainer>
        <S.TemperatureText>
          {temperature}ºC
          {icon && <S.LocationIcon src={getIconUrl()} width={48} height={48} />}
        </S.TemperatureText>
        <div>
          {minTemperature && (
            <S.AltTemperatureText>Min: {minTemperature}ºC</S.AltTemperatureText>
          )}
          {maxTemperature && (
            <S.AltTemperatureText>Max: {maxTemperature}ºC</S.AltTemperatureText>
          )}
        </div>
      </S.TemperatureContainer>
    </Card>
  );
};

export default WeatherCard;
