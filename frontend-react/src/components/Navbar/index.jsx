import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { navbarItemList as List } from "./navbar-items";
import "./styles.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const[currentItem, setCurrentItem] = useState("");

  function changeCurrentItemSelected(name) {
    setCurrentItem(name);
  }

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
        {List.map((el) => {
          return (
            <NavbarItem
              key={el.name}
              name={el.name}
              icon={el.icon}
              isOpened={isOpen}
              changeCurrentItem={changeCurrentItemSelected}
              currentItem={currentItem}
            ></NavbarItem>
          );
        })}
      </div>
    </div>
  );
}