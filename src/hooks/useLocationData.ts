import { useEffect, useState } from "react";
import { LocationDataStateType } from "../types";

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
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLocationData({
          lat: `${coords.latitude}`,
          lon: `${coords.longitude}`,
          name: "Current location",
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
