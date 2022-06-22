import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { navbarItemList as List } from "./navbar-items";
import "./styles.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [nameSelectedItem, setNameSelectedItem] = useState("Início");


  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function changeSelectedName(name){
    setNameSelectedItem(name)
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
          onClick={() => toggleOpen()}
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
            <NavbarItem
              key={el.name}
              name={el.name}
              icon={el.icon}
              isOpened={isOpen}
              
              nameSelected={nameSelectedItem}
              changeSelectedName={changeSelectedName}
            ></NavbarItem>
          );
        })}
      </div>
    </div>
  );
}
