import React, { useContext } from "react";
import { Button, SearchBox } from "../composer";
import { PatientContext } from "../../contexts/PatientContext";
import { useFetchStates } from "../../hooks/useFetchStates";
import { endpoint } from "../../utils";
import { useFetchCities } from "../../hooks/useFetchCities";

const UserSearchWrapper = () => {
  const { selectedState, setSelectedState, selectedCity, setSelectedCity } =
    useContext(PatientContext);
  const { states, error } = useFetchStates(endpoint);
  const { cities, cityError } = useFetchCities(selectedState, endpoint);

  return (
    <div className="bg-blue-800 pt-10 rounded-bl-xl rounded-br-3xl">
      <div className="bg-white w-5/6 md:w-4/6 relative m-auto top-10 md:top-8 rounded-xl shadow-xl">
        <div className=" flex flex-col md:flex-row justify-center items-center p-5">
          <SearchBox
            placeText="Search State"
            width={20}
            label={selectedState}
            dispatch={setSelectedState}
            data={states}
            error={error}
          />
          <SearchBox
            placeText="Search City"
            width={20}
            label={selectedCity}
            dispatch={setSelectedCity}
            data={cities}
            error={cityError}
          />
          <Button
            title="Search"
            bgColor="bg-blue-700"
            color="text-white"
            padding="p-2"
            paddingLeft="pl-4"
            paddingRight="pr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default UserSearchWrapper;
