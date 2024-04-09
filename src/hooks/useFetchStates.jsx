import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchStates = (endpoint) => {
  const [states, setStates] = useState([]);
  const [error, setError] = useState("");

  const getAllStates = async (endpoint) => {
    try {
      const res = await axios.get(`${endpoint}/states`);
      // console.log(res);
      setStates(res.data);
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  useEffect(() => {
    if (endpoint) getAllStates(endpoint);
  }, [endpoint]);

  return { states, error };
};
