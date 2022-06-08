import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { navbarItemList as List } from "./navbar-items";
import "./styles.css";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  function toggleOpen() {
    setIsOpen(!isOpen);
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
        {List.map((el) => (
          <NavbarItem
            name={el.name}
            icon={el.icon}
            isOpened={isOpen}
          ></NavbarItem>
        ))}
      </div>
    </div>
  );
}
