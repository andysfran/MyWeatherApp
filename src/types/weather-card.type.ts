export type WeatherCardPropsType = {
  locationName: string;
  date?: number;
  temperature: number | string;
  minTemperature?: number | string;
  maxTemperature?: number | string;
  icon?: string;
};
