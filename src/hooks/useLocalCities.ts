import { useEffect, useState } from "react";
import { LocationDataStateType } from "../types";

const useLocalCities = () => {
  const [cities, setCities] = useState<LocationDataStateType[]>([]);

  useEffect(() => {
    const citiesLocalStorageString = localStorage.getItem("cities");
    if (!citiesLocalStorageString) {
      localStorage.setItem("cities", JSON.stringify([]));
    } else {
      const citiesLocalStorage: LocationDataStateType[] = JSON.parse(
        citiesLocalStorageString
      );
      setCities(citiesLocalStorage);
    }
  }, []);

  const addCity = (city: LocationDataStateType) => {
    if (cities.findIndex(({ name }) => name === city.name) === -1) {
      const citiesListUpdated = [...cities, city];
      setCities(citiesListUpdated);
      localStorage.setItem("cities", JSON.stringify(citiesListUpdated));
    } else {
      // Alert City already added
    }
  };

  const removeCity = (city: LocationDataStateType) => {
    const citiesListUpdated = cities.filter(
      (cityRow) => cityRow.name !== city.name
    );
    setCities(citiesListUpdated);
    localStorage.setItem("cities", JSON.stringify(citiesListUpdated));
  };

  return { cities, addCity, removeCity };
};

export default useLocalCities;
