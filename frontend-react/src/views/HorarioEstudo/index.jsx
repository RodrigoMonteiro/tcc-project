import "./styles.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useState } from "react";

export function HorarioEstudo() {
  const [isFimSemana, setIsFimSemana] = useState("Nao");
  const [turnoEstudoSelected, setIsTurnoEstudoSelected] = useState("Matutino");
  const [semestreEstudoSelected, setSemestreEstudoSelected] = useState("2021.1");
  const [acaoEstudoSelected, setAcaoEstudoSelected] = useState("Visualizar");

   const theme = createTheme({
     typography: {
       allVariants: {
         fontFamily: "'Oswald' , 'sans-serif'",
       },
     },
   });

  function handleChangeFimSemana(event) {
    setIsFimSemana(event.target.value);
  }

  function handleChangeTurnoEstudo(event) {
    setIsTurnoEstudoSelected(event.target.value);
  }
  function handleChangeAcaoEstudo(event) {
    setAcaoEstudoSelected(event.target.value);
  }

  function handleChangeSemestreEstudo(event) {
    setSemestreEstudoSelected(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="horario-estudo-container">
        <div className="horario-estudo-options-contanier">
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Semestre</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={semestreEstudoSelected}
                label="Semestre"
                onChange={handleChangeSemestreEstudo}
                defaultValue="2021.1"
              >
                <MenuItem value={"2021.1"}>2021.1</MenuItem>
                <MenuItem value={"2021.2"}>2021.2</MenuItem>
                <MenuItem value={"2022.1"}>2022.1</MenuItem>
                <MenuItem value={"2022.2"}>2022.2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Turno</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={turnoEstudoSelected}
                label="Turno"
                onChange={handleChangeTurnoEstudo}
                defaultValue="Matutino"
              >
                <MenuItem value={"Matutino"}>Matutino</MenuItem>
                <MenuItem value={"Vespertino"}>Vespertino</MenuItem>
                <MenuItem value={"Noturno"}>Noturno</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Ação</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={acaoEstudoSelected}
                label="Acao"
                onChange={handleChangeAcaoEstudo}
                defaultValue="Visualizar"
              >
                <MenuItem value={"Visualizar"}>Visualizar</MenuItem>
                <MenuItem value={"Editar"}>Editar</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="horario-estudo-radio-btn-container">
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Estudar fins de semana?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={isFimSemana}
              onChange={handleChangeFimSemana}
              defaultValue="Nao"
            >
              <FormControlLabel value="Nao" control={<Radio />} label="Não" />
              <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="horario-estudo-tabela-container">
          <div className="horario-estudo-tabela-header-container">
            {isFimSemana === "Sim" ? (
              <>
                <div className="horario-estudo-tabela-header-horario">
                  <span>Horários</span>
                </div>
                <div className="horario-estudo-tabela-header-segunda">
                  <span>Segunda-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-terca">
                  <span>Terça-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-quarta">
                  <span>Quarta-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-quinta">
                  <span>Quinta-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-sexta">
                  <span>Sexta-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-sabado">
                  <span>Sábado</span>
                </div>
                <div className="horario-estudo-tabela-header-domingo">
                  <span>Domingo</span>
                </div>
              </>
            ) : (
              <>
                <div className="horario-estudo-tabela-header-horario">
                  <span>Horários</span>
                </div>
                <div className="horario-estudo-tabela-header-segunda">
                  <span>Segunda-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-terca">
                  <span>Terça-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-quarta">
                  <span>Quarta-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-quinta">
                  <span>Quinta-feira</span>
                </div>
                <div className="horario-estudo-tabela-header-sexta">
                  <span>Sexta-feira</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="btn-add-horario-container">
          <button className="btn-add-horario">+ Adicionar Horário</button>
        </div>
      </div>
    </ThemeProvider>
  );
}
