import { useEffect, useState } from "react";

import { LocationDataStateType } from "../types";
import { fetchLocationReverse } from "../api";
import { getFormattedCity } from "../utils/dataFormat";

const useLocationData = () => {
  const [locationData, setLocationData] = useState<LocationDataStateType>({
    lat: "",
    lon: "",
    name: "",
  });

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { data } = await fetchLocationReverse(
          coords.latitude,
          coords.longitude
        );
        setLocationData({
          lat: `${coords.latitude}`,
          lon: `${coords.longitude}`,
          name: getFormattedCity(data[0]),
        });
      });
    } else {
      setLocationData({
        lat: "38.7259284",
        lon: "-9.137382",
        name: "Lisbon, Portugal",
      });
    }
  };

  return { locationData, setLocationData };
};

export default useLocationData;
