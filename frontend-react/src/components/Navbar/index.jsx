import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { navbarItemList as List } from "./navbar-items";

import { GlobalContext } from "../../providers/globalProps";
import "./styles.css";

export function Navbar() {
  const { globalProps, setGlobalProps } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(true);
  const [nameSelectedItem, setNameSelectedItem] = useState("Início");

  function toggleOpen() {
    setIsOpen(!isOpen);
    setGlobalProps({...globalProps , isNavbarOpen: isOpen})


  }

  function changeSelectedName(name) {
    setNameSelectedItem(name);
    
  }

  return (
    <div
      className={`navbar-container ${
        isOpen ? "navbar-container-opened" : "navbar-container-closed"
      }`}
    >
      <div className="navbar-header">
        <FaChevronLeft
          className={`navbar-header-icon ${
            isOpen ? "navbar-icon-opened" : "navbar-icon-closed"
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
            isOpen ? "" : "navbar-header-logo-closed"
          }`}
        >
          <span>LOGO OVER HERE</span>
        </div>
        <div
          className={`navbar-header-title ${
            isOpen ? "" : "navbar-header-title-closed"
          }`}
        >
          <h3>Otimize seu tempo</h3>
        </div>
      </div>
      <div className={`navbar-body ${isOpen ? "" : "navbar-body-closed"}`}>
     
          {List.map((el) => {
            return (
              <Link
                className="link-container"
                to={el.component}
              >
                <NavbarItem
                  key={el.name}
                  name={el.name}
                  icon={el.icon}
                  isOpened={isOpen}
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
