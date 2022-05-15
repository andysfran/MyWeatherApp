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
