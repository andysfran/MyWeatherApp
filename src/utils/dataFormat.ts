import { GeolocationType } from "../types";

/**
 * Transform a UNIX date to the format "dd MM"
 * @return string
 * @param unixDate
 */
export const getFormatedDate = (unixDate: number): string => {
  const date = new Date(unixDate * 1000);
  return `${date.getUTCDate()} ${date.toLocaleString("en-US", {
    month: "long",
  })}`;
};

export const getFormattedCity = (city: GeolocationType): string => {
  let cityName = city.name;
  if (city.state) cityName += `, ${city.state}`;
  cityName += `, ${city.country}`;
  return cityName;
};
