import axios from "../utils/axios";
import { AxiosResponse } from "axios";

interface Geolocation {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  state?: string;
  country: string;
}

export const fetchLocation = async (locationName: string) => {
  try {
    return (await axios.get("/geo/1.0/direct", {
      params: { q: locationName, limit: 5 },
    })) as AxiosResponse<Geolocation[]>;
  } catch (err) {
    console.log("Failed to fetch location:", err);
    return { status: false, data: [] };
  }
};

export const fetchLocationReverse = async (lat: number, lon: number) => {
  try {
    return (await axios.get("/geo/1.0/reverse", {
      params: { lat, lon, limit: 1 },
    })) as AxiosResponse<Geolocation[]>;
  } catch (err) {
    console.log("Failed to fetch location:", err);
    return { status: false, data: [] };
  }
};
