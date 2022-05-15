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
    const res: AxiosResponse<Geolocation[]> = await axios.get(
      "/geo/1.0/direct",
      {
        params: { q: locationName, limit: 5 },
      }
    );
    return res;
  } catch (err) {
    console.log("Failed to fetch location:", err);
    return { status: false, data: [] };
  }
};
