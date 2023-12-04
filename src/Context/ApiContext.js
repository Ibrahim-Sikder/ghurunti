import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext } from "react";
import { useState } from "react";

export const APIContext = createContext({});

const ApiProvider = ({ children }) => {
  

  const contextValue = {
    
  };

  return (
    <APIContext.Provider value={contextValue}>{children}</APIContext.Provider>
  );
};

export default ApiProvider;
