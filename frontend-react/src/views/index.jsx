import "./styles.css";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalContext } from "../providers/globalProps";

import { Inicio } from "./Inicio";
import { CadastroSemestre } from "./CadastroSemestre";
import { HorarioSemestre } from "./HorarioSemestre";
import { HorarioEstudo } from "./HorarioEstudo";
import { Tarefas } from "./Tarefas";
import { Anotacoes } from "./Anotacoes";

export function Views() {
  const { globalProps } = useContext(GlobalContext);
  return (
    <div
      className={`views-container ${
        globalProps.isNavbarOpen
          ?
          "views-container-navbar-closed"
          :
          "views-container-navbar-opened"
      }`}
    >
      <Routes>
        <Route path="/Inicio" element={<Inicio />}></Route>
        <Route path="/CadastroSemestre" element={<CadastroSemestre />}></Route>
        <Route path="/HorarioSemestre" element={<HorarioSemestre />}></Route>
        <Route path="/HorarioEstudo" element={<HorarioEstudo />}></Route>
        <Route path="/Tarefas" element={<Tarefas />}></Route>
        <Route path="/Anotacoes" element={<Anotacoes />}></Route>
      </Routes>
    </div>
  );
}
