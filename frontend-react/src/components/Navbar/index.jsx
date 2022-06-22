import React, {useContext} from 'react'
import { NavbarItem } from "./Navbar-item";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { navbarItemList as List } from "./navbar-items";

import { Home } from "../../views/Home";
import { CadastroSemestre } from "../../views/CadastroSemestre";
import { Anotacoes } from "../../views/Anotacoes";
import { Tarefas } from "../../views/Tarefas";
import { HorarioEstudo } from "../../views/HorarioEstudo";
import { HorarioSemestre } from "../../views/HorarioSemestre";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {GlobalContext} from '../../providers/globalProps'
import "./styles.css";

export function Navbar() {
  const { setGlobalProps } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(true);
  const [nameSelectedItem, setNameSelectedItem] = useState("Início");

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function changeSelectedName(name) {
    setNameSelectedItem(name);
  }

  function getRouteFromName() {}

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
          setGlobalProps({ isNavbarOpen: isOpen });
            toggleOpen()
          }

          }
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
          console.log(el.component);
          return (
            <NavbarItem
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
