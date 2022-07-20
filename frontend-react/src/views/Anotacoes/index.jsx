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

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Anotacoes() {
  const [openDialog ,setOpenDialog] = useState(false)
  const [semestreAnotacoes, setSemestreAnotacoes] = useState("2021.1");

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });
   const handleClickOpen = () => {
     setOpenDialog(true);
   };

   const handleClose = () => {
     setOpenDialog(false);
   };

  function handleSemestreAnotacoes(event) {
    setSemestreAnotacoes(event.target.value);
  }
  function editAnotacoes(){
    console.log("Editar anotações...")
  }
  function visualizarAnotacoes(){
    console.log("visualizar anotações...")
  }
  function deletarAnotacoes(){
    console.log("deletar anotações...")
  }

  

  return (
    <ThemeProvider theme={theme}>
      <div className="anotacoes-container">
        <div className="anotacoes-options-contanier">
          <Box sx={{ minWidth: 240 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Semestre</InputLabel>
              <Select
                labelId="semestre-anotacoes"
                id="semestre-anotacoes-id"
                value={semestreAnotacoes}
                label="Semestre"
                onChange={handleSemestreAnotacoes}
                defaultValue={"2021.1"}
              >
                <MenuItem value={"2021.1"}>2021.1</MenuItem>
                <MenuItem value={"2021.2"}>2021.2</MenuItem>
                <MenuItem value={"2022.1"}>2022.1</MenuItem>
                <MenuItem value={"2022.2"}>2022.2</MenuItem>
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
                <MdRemoveRedEye size={18} color={"#0f4a8d"} onClick={visualizarAnotacoes}/>
              </span>
            </div>
            <div className="anotacoes-tabela-body-acoes">
              <MdMode size={18} color={"#0f4a8d"} onClick={editAnotacoes}/>
              <MdOutlineDelete size={18} color="red" onClick={deletarAnotacoes}/>
            </div>
          </div>
          <button className="btn-criar-anotacao" onClick={handleClickOpen}>
            Criar Anotação
          </button>
        </div>
        <Dialog fullWidth="lg" open={openDialog} onClose={handleClose}>
          <DialogTitle>Criar nova anotação</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="disciplina-dialog"
              label="Disciplina"
              fullWidth
            />
            <TextField
              id="descricao-dialog"
              label="Descrição"
              multiline
              rows={7}
              defaultValue=""
              placeholder="Descreva a tarefa aqui..."
              fullWidth
              style={{ marginTop: 40 }}
            />
          </DialogContent>
          <DialogActions>
            <button className="btn-dialog-close" onClick={handleClose}>
              Cancelar
            </button>
            <button className="btn-dialog-submit" onClick={handleClose}>
              Salvar
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
