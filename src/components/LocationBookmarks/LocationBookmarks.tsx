import React, { useEffect, useState } from "react";

import { useLocalCities } from "../../hooks";
import { fetchLocation } from "../../api";
import { LocationDataStateType } from "../../types";

import Input from "../Input/Input";
import Button from "../Button/Button";
import * as S from "./LocationBookmarks.styles";

const LocationBookmarks = ({
  onSelectCity,
}: {
  onSelectCity: (city: LocationDataStateType) => void;
}) => {
  const { cities, addCity, removeCity } = useLocalCities();
  const [isSearching, setIsSearching] = useState(false);
  const [places, setPlaces] = useState<LocationDataStateType[]>([]);

  useEffect(() => {
    if (!isSearching) {
      setPlaces([]);
    }
  }, [isSearching]);

  const toggleIsSearching = () => setIsSearching(!isSearching);

  const fetchCities = async (searchQuery: string) => {
    if (searchQuery) {
      const { status, data } = await fetchLocation(searchQuery);
      if (status === 200) {
        const resMapped = data.map((place) => {
          let name = place.name;
          if (place.state) name += `, ${place.state}`;
          name += `, ${place.country}`;
          return {
            lat: `${place.lat}`,
            lon: `${place.lon}`,
            name,
          };
        });
        setPlaces(resMapped);
      }
    } else {
      setPlaces([]);
    }
  };

  const onAddCity = (city: LocationDataStateType) => {
    addCity(city);
    toggleIsSearching();
  };

  const renderSearchForm = () => {
    return (
      <S.ContainerBookmarks>
        <S.ContainerBookmarksHeading>
          <Button variation="secondary" onClick={toggleIsSearching}>
            Go back
          </Button>
        </S.ContainerBookmarksHeading>
        <Input
          label="Search:"
          onValue={fetchCities}
          placeholder="Example: Paris"
        />
        <S.LocationList>
          {places.map((city) => (
            <S.LocationLi key={city.name} onClick={() => onAddCity(city)}>
              {city.name}
            </S.LocationLi>
          ))}
        </S.LocationList>
      </S.ContainerBookmarks>
    );
  };

  const renderBookmarks = () => {
    return (
      <S.ContainerBookmarks>
        <S.ContainerBookmarksHeading>
          <Button variation="primary" onClick={toggleIsSearching}>
            Search
          </Button>
        </S.ContainerBookmarksHeading>
        <S.LocationList>
          {cities.map((city) => (
            <S.LocationLi key={city.name}>
              <S.CityName onClick={() => onSelectCity(city)}>
                {city.name}
              </S.CityName>
              <Button variation="danger" onClick={() => removeCity(city)}>
                Remove
              </Button>
            </S.LocationLi>
          ))}
        </S.LocationList>
      </S.ContainerBookmarks>
    );
  };

  return <>{isSearching ? renderSearchForm() : renderBookmarks()}</>;
};

export default LocationBookmarks;
