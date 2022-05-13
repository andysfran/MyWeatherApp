import React from 'react';
import {WeatherCardPropsType} from "../../types/weather-card.type";
import { Card } from "../Card/Card.styles";
import * as S from './WeatherCard.styles';

const WeatherCard = ({ locationName, temperature, date }: WeatherCardPropsType) => {

  const getFormatedDate = (unixDate: number): string => {
    const date = new Date(unixDate * 1000);
    return `${date.getUTCDate()} ${date.toLocaleString("en-US", {month: "long"})}`;
  };

  return (
    <Card>
      <S.LocationText>{locationName}</S.LocationText>
      {date && <S.DateText>{getFormatedDate(date)}</S.DateText>}
      <S.TemperatureText>{temperature}ºC</S.TemperatureText>
    </Card>
  );
}

export default WeatherCard;
