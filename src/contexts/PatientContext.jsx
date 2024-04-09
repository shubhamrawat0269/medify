import { createContext, useState } from "react";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const context = {
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
  };
  return (
    <PatientContext.Provider value={context}>
      {children}
    </PatientContext.Provider>
  );
};

export { PatientContext, PatientProvider };
