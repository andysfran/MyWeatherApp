import { FunctionComponent, ReactElement } from "react";

export type DefaultProps = FunctionComponent<{
  children?: ReactElement[] | ReactElement;
}>;

export type ForecastDataStateType = {
  temperature?: number;
  icon?: string;
  daily?: Record<string, any>[];
};

export type LocationDataStateType = {
  lat: string;
  lon: string;
  name: string;
};

export type GeolocationType = {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  state?: string;
  country: string;
};
