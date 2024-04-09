import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchHospitalDetails = (
  selectedState,
  selectedCity,
  endpoint
) => {
  const [data, setData] = useState([]);
  const [dataError, setDataError] = useState("");

  const getAllHospitalsDetails = async (state, city, endpoint) => {
    //meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA
    try {
      const res = await axios.get(
        `${endpoint}/data?state=${state}&city=${city}`
      );
      // console.log(res);
      setData(res.data);
    } catch (error) {
      setDataError(error.message);
      return null;
    }
  };

  useEffect(() => {
    if (selectedState && selectedCity)
      getAllHospitalsDetails(selectedState, selectedCity, endpoint);
  }, [selectedState, selectedCity]);

  return { data, dataError };
};
