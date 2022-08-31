import React, { useState ,useContext } from "react";
import {Link} from 'react-router-dom'
import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { navbarItemList as List } from "./../../providers/dataTest/navbar-items";

import { GlobalContext } from "../../providers/globalProps";
import "./styles.css";

export function Navbar() {

  const { globalProps, setGlobalProps } = useContext(GlobalContext);
  const [nameSelectedItem, setNameSelectedItem] = useState("Início");
  
  function toggleOpen() {
    setGlobalProps({...globalProps , isNavbarOpen: !globalProps.isNavbarOpen})
  }

  function changeSelectedName(name) {
    setNameSelectedItem(name);
    
  }

  return (
    <div
      className={`navbar-container ${
        globalProps.isNavbarOpen
          ? "navbar-container-opened"
          : "navbar-container-closed"
      }`}
    >
      <div className="navbar-header">
        <FaChevronLeft
          className={`navbar-header-icon ${
            globalProps.isNavbarOpen
              ? "navbar-icon-opened"
              : "navbar-icon-closed"
          }`}
          onClick={() => {
            setGlobalProps({
              ...globalProps,
              titleName: nameSelectedItem,
            });
            toggleOpen();
          }}
        ></FaChevronLeft>
        <div
          className={`navbar-header-logo ${
            globalProps.isNavbarOpen ? "" : "navbar-header-logo-closed"
          }`}
        >
          <img  src="assets/logo.png" alt="LOGO OVER HERE" />
        </div>
        <div
          className={`navbar-header-title ${
            globalProps.isNavbarOpen ? "" : "navbar-header-title-closed"
          }`}
        >
          <h3>Otimize seu tempo</h3>
        </div>
      </div>
      <div
        className={`navbar-body ${
          globalProps.isNavbarOpen ? "" : "navbar-body-closed"
        }`}
      >
        {List.map((el) => {
          return (
            <Link key={el.name} className="link-container" to={`/${el.component}`}>
              <NavbarItem
                key={el.name}
                name={el.name}
                icon={el.icon}
                isOpened={globalProps.isNavbarOpen}
                nameSelected={nameSelectedItem}
                changeSelectedName={changeSelectedName}
              ></NavbarItem>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
