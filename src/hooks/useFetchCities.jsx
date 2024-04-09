import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCities = (selectedState, endpoint) => {
  const [cities, setCities] = useState([]);
  const [cityError, setCityError] = useState("");

  const getAllCities = async (state, endpoint) => {
    //meddata-backend.onrender.com/cities/Alaska
    try {
      const res = await axios.get(`${endpoint}/cities/${state}`);
      // console.log(res);
      setCities(res.data);
    } catch (error) {
      setCityError(error.message);
      return null;
    }
  };

  useEffect(() => {
    if (selectedState) getAllCities(selectedState, endpoint);
  }, [selectedState]);

  return { cities, cityError };
};
