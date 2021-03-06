import { useState } from "react";
import "./styles.css";

import { MdMode, MdOutlineDelete } from "react-icons/md";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


import { ThemeProvider, createTheme } from "@mui/material/styles";

export function CadastroSemestre() {
  
  const [optionCadastrarSelected, setOptionCadastrarSelected] = useState(true);
  const [optionEditarSelected, setOptionEditarSelected] = useState(false);
  const [semestre, setSemestre] = useState("2021.1");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const actionsBtn = (
    <>
      <MdMode
        color="#0f4a8d"
        size={18}
        style={{ marginRight: 15, cursor: "pointer" }}
        onClick ={editDisciplina}
        />
      <MdOutlineDelete
        color="red"
        size={18}
        style={{ marginLeft: 15, cursor: "pointer" }}
        onClick ={deleteDisciplina}
      />
    </>
  );

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Oswald' , 'sans-serif'",
     
    },
  },
});

function adicionarDisciplina(){
  console.log("adicionar disciplina...")
}
function editDisciplina(){
  console.log("Editar disciplina...")
}
function deleteDisciplina(){
  console.log("Deletar disciplina...")
}
function deleteSemestre(){
  console.log("Deletar semestre...")
}
function salvarSemestre(){
  console.log("Salvar semestre...")
}

  function toggleSelected() {
    setOptionCadastrarSelected(!optionCadastrarSelected);
    setOptionEditarSelected(!optionEditarSelected);
  }


  const handleChangeSemestre = (event) => {
    setSemestre(event.target.value);
  };

  const columns = [
    {
      id: "name",
      label: "Nome",
      minWidth: 100,
      color: "#0f4a8d",
      kindText: "center",
    },
    {
      id: "actions",
      label: "A????es",
      minWidth: 100,
      color: "#0f4a8d",
      kindText: "center",
    },
  ];

  function createData(name, actions) {
    return { name, actions };
  }

  const rows = [
    createData("Algoritmo", actionsBtn),
    createData("C??lculo 1", actionsBtn),
  ];

  return (
    <ThemeProvider theme={theme}>

    
    <div className="cadastro-semestre-container">
      <div className="cadastro-semestre-options">
        <span
          onClick={toggleSelected}
          className={`cadastro-semestre-btn-edit-options ${
            optionCadastrarSelected ? "cadastro-semestre-options-selected" : ""
          }`}
        >
          Cadastrar novo semestre
        </span>
        <span
          onClick={toggleSelected}
          className={`cadastro-semestre-btn-edit-options ${
            optionEditarSelected ? "cadastro-semestre-options-selected" : ""
          }`}
        >
          Editar semestres
        </span>
      </div>

      {optionCadastrarSelected ? (
        <div className="cadastro-semestre-card-cadastrar">
          <span className="card-cadastrar-semestre">Novo semestre</span>
          <Box component="form" sx={{ width: 3 / 4, mb: 2 }}>
            <TextField
              id="filled-basic"
              label="Nome do semestre"
              variant="filled"
              fullWidth
            />
          </Box>
          <span className="cadastro-semestre-informacao-cadastrar">
            Disciplinas que pertencem a este per??odo
          </span>
          <Box component="form" sx={{ width: 3 / 4, mt: 2 }}>
            <TextField
              id="filled-basic"
              label="Nome da disciplina"
              variant="filled"
              fullWidth
            />
          </Box>
          <div className="cadastro-semestre-btn-actions-cadastrar">
            <button className="btn-adicionar-semestre-cadastrar" onClick={adicionarDisciplina}>Adicionar disciplina</button>
            <button className="btn-salvar-cadastrar" onClick={salvarSemestre}>Salvar Semestre</button>
          </div>
        </div>
      ) : (
        <div className="cadastro-semestre-card-editar">
          <span className="cadastro-semestre-span-editar">
            Editar semestres
          </span>
          <Box sx={{ width: 3 / 4 }} centered>
            <FormControl fullWidth lassName="cadastro-semestre">
              <InputLabel id="selecionar-semestre-editar">Semestre</InputLabel>
              <Select
                labelId="editar-semestre-editar"
                id="editar semestre"
                value={semestre}
                label="Semestre"
                defaultValue="2021.1"
                onChange={handleChangeSemestre}
              >
                <MenuItem
                  className="cadastro-semestre-menuItem-editar"
                  value={"2021.1"}
                >
                  2021.1
                </MenuItem>
                <MenuItem
                  className="cadastro-semestre-menuItem-editar"
                  value={"2021.2"}
                >
                  2021.2
                </MenuItem>
                <MenuItem
                  className="cadastro-semestre-menuItem-editar"
                  value={"2022.1"}
                >
                  2022.1
                </MenuItem>
                <MenuItem
                  className="cadastro-semestre-menuItem-editar"
                  value={"2022.2"}
                >
                  2022.2
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Paper
            sx={{
              mt: 2,
              mb: 4,
              width: "75%",
              height: "50%",
              overflowY: "scroll",
              padding: "30px",
              border: 0.5,
              borderRadius: 2,
              borderColor: "#c4c4c4",
              p: 2,
              pt: 0,
            }}
            centered
          >
            <TableContainer sx={{ maxHeight: 300 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead className="tableheader">
                  <TableRow
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "165%",
                      fontFamily: "'Oswald' , 'sans-serif'",
                      overflowX: "hidden",
                    }}
                  >
                    {columns.map((column) => (
                      <TableCell
                        className="cadastro-semestre-tableHeader-editar"
                        key={column.id}
                        style={{
                          color: column.color,
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          className="cadastro-semestre-tableRow-editar"
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                className="cadastro-semestre-tableBody-editar"
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <div className="cadastro-semestre-btn-actions-editar">
            <button className="btn-deletar-semestre" onClick={deleteSemestre}>Deletar semestre</button>
            <button className="btn-adicionar-disciplina" onClick={adicionarDisciplina}>
              Adicionar disciplina
            </button>
          </div>
        </div>
      )}
    </div>
</ThemeProvider>
  );
                  }
