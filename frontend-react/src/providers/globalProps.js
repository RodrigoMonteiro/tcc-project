import React, { useState } from "react";

export const GlobalContext = React.createContext({});

export const GlobalProvider = (props) => {
    const [globalProps, setGlobalProps] = useState({
        titleName: "Início",
        isNavbarOpen: true
    })
  
  return ( 
    <GlobalContext.Provider value={{ globalProps, setGlobalProps }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
