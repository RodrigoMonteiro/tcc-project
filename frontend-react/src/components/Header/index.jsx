import React, { useState, useContext } from "react";
import "./styles.css";
import { GlobalContext } from "../../providers/globalProps";
import { Switch } from "../Switch";
import { FaUserAlt } from "react-icons/fa";
import { Select } from "../Select/index";

export function Header() {

  const {globalProps, setGlobalProps} = useContext(GlobalContext)
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
    console.log(isSelectOpen);
  }

  function toggleTheme(){
    setGlobalProps({
      ...globalProps,
       isLightTheme: !globalProps.isLightTheme
    })
  }
  

  return (
    <div className="header-container">
      <span className="header-title">
        <h1>{globalProps.titleName}</h1>
      </span>
      <Switch
        rounded={true}
        onToggle={() => {

          toggleTheme();
        }}
      ></Switch>
      <div className="header-btn">
        <FaUserAlt
          onClick={() => {
            toggleSelect();
          }}
          size={24}
        ></FaUserAlt>
        <Select isOpen={isSelectOpen}></Select>
      </div>
    </div>
  );
}
