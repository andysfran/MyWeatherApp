import axios from "../utils/axios";
import { AxiosResponse } from "axios";

interface Forecast {
  current: Record<string, unknown>;
  daily: Record<string, unknown>[];
}

export const fetchForecast = async (
  lat: string,
  lon: string
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse<Forecast> = await axios.get("/data/2.5/onecall", {
      params: {
        lat: lat,
        lon: lon,
        exclude: "minutely,hourly",
        units: "metric",
      },
    });
    return res;
  } catch (err) {
    console.log("Failed to fetch location:", err);
    return {
      status: 500,
      data: [],
      config: {},
      headers: {},
      statusText: "Failed to fetch location",
    };
  }
};
