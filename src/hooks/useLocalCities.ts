import { useEffect, useState } from "react";
import { LocationDataStateType } from "../types";

import Swal from "sweetalert2";

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

  const addCity = (city: LocationDataStateType): boolean => {
    if (cities.findIndex(({ name }) => name === city.name) === -1) {
      const citiesListUpdated = [...cities, city];
      setCities(citiesListUpdated);
      localStorage.setItem("cities", JSON.stringify(citiesListUpdated));
      return true;
    } else {
      // Alert City already
      Swal.fire(
        "This location cannot be added:",
        "You already have this city on your bookmarks.",
        "warning"
      ).then();
      return false;
    }
  };

  const removeCity = (city: LocationDataStateType) => {
    Swal.fire({
      title: "Do you want to remove this city from your bookmarks list?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const citiesListUpdated = cities.filter(
          (cityRow) => cityRow.name !== city.name
        );
        setCities(citiesListUpdated);
        localStorage.setItem("cities", JSON.stringify(citiesListUpdated));
        Swal.fire("Removed successfully!", "", "success").then();
      }
    });
  };

  return { cities, addCity, removeCity };
};

export default useLocalCities;
