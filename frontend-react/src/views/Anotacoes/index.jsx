import "./styles.css";
import { useState } from "react";
import {
  MdRemoveRedEye,
  MdMode,
  MdOutlineDelete,
  MdOutlineCheck,
} from "react-icons/md";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Anotacoes() {
  const [semestreAnotacoes, setSemestreAnotacoes] = useState("");
  const [disciplinaAnotacoes, setDisciplinaAnotacoes] = useState("");

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  function handleSemestreAnotacoes(event) {
    setSemestreAnotacoes(event.target.value);
  }

  function handleDisciplinaAnotacoes(event) {
    setDisciplinaAnotacoes(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="anotacoes-container">
        <div className="anotacoes-options-contanier">
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Semestre</InputLabel>
              <Select
                labelId="semestre-anotacoes"
                id="semestre-anotacoes-id"
                value={semestreAnotacoes}
                label="Semestre"
                onChange={handleSemestreAnotacoes}
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
              <InputLabel id="demo-select-small">Disciplina</InputLabel>
              <Select
                labelId="disciplina-anotacoes"
                id="disciplina-anotacoes-id"
                value={disciplinaAnotacoes}
                label="Disciplina"
                onChange={handleDisciplinaAnotacoes}
              >
                <MenuItem value={"Matutino"}>Matutino</MenuItem>
                <MenuItem value={"Vespertino"}>Vespertino</MenuItem>
                <MenuItem value={"Noturno"}>Noturno</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="anotacoes-tabela-container">
          <div className="anotacoes-tabela-header-container">
            <div className="anotacoes-tabela-header-descricao">
              <span>Descrição</span>
            </div>
            <div className="anotacoes-tabela-header-disciplina">
              <span>Disciplina</span>
            </div>
            <div className="anotacoes-tabela-header-criacao">
              <span>Criado em</span>
            </div>
            <div className="anotacoes-tabela-header-visualizar">
              <span>Visualizar</span>
            </div>
            <div className="anotacoes-tabela-header-acoes">
              <span>Ações</span>
            </div>
          </div>
          <div className="anotacoes-tabela-body-container">
            <div className="anotacoes-tabela-body-descricao">
              <span>Descrição anotações </span>
            </div>
            <div className="anotacoes-tabela-body-disciplina">
              <span>Disciplina</span>
            </div>
            <div className="anotacoes-tabela-body-criado">
              <span>Criação</span>
            </div>
            <div className="anotacoes-tabela-body-visualizar">
              <span>
                <MdRemoveRedEye />
              </span>
            </div>
            <div className="anotacoes-tabela-body-acoes">
              <MdMode />
              <MdOutlineDelete />
              <MdOutlineCheck />
            </div>
          </div>
          <button className="btn-criar-anotacao">Criar Anotação</button>
        </div>
      </div>
    </ThemeProvider>
  );
}
