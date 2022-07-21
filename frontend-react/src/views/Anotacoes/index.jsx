import "./styles.css";
import { useState } from "react";

import { MdRemoveRedEye, MdMode, MdOutlineDelete } from "react-icons/md";

import { anotacoesList } from "../../providers/dataTest/anotacoes";

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
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  const [openDialogCriarAnotacao, setOpenDialogCriarAnotacao] = useState(false);
  const [openDialogVisualizar, setOpenDialogVisualizar] = useState(false);
  const [openDialogEditar, setOpenDialogEditar] = useState(false);

  const [semestreAnotacoes, setSemestreAnotacoes] = useState("2021.1");
  const [anotacaoList, setAnotacoesList] = useState(anotacoesList);

  const [editarAnotacao, setEditarAnotacao] = useState({
    anotacaoId: "",
    descricaoAnotacao: "",
    disciplinaAnotacao: "",
  });
  const [novaAnotacao, setNovaAnotacao] = useState({
    anotacaoId: "",
    descricaoAnotacao: "",
    disciplinaAnotacao: "",
    criadoEm: "",
  });

  function getData() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return `${dd}/${mm}/${yyyy}`;
  }

  function resetData() {
    setNovaAnotacao({
      anotacaoId: "",
      criadoEm: "",
      descricaoAnotacao: "",
      disciplinaAnotacao: "",
    });
  }
  const handleClickOpenCriarAnotacao = () => {
    setOpenDialogCriarAnotacao(true);
  };

  const handleCloseCriarAnotacao = () => {
    setOpenDialogCriarAnotacao(false);
  };

  const handleClickOpenVisualizar = () => {
    setOpenDialogVisualizar(true);
  };

  const handleCloseVisualizar = () => {
    setOpenDialogVisualizar(false);
  };

  const handleClickOpenEditar = () => {
    setOpenDialogEditar(true);
  };

  const handleCloseEditar = () => {
    setOpenDialogEditar(false);
  };

  function handleSemestreAnotacoes(event) {
    setSemestreAnotacoes(event.target.value);
  }

  function handleEditDescricaoAnotacoes(event) {
    setEditarAnotacao({
      ...editarAnotacao,
      descricaoAnotacao: event.target.value,
    });
  }
  function handleEditDisciplinaAnotacoes(event) {
    setEditarAnotacao({
      ...editarAnotacao,
      disciplinaAnotacao: event.target.value,
    });
  }

  function handleNovaAnotacoesDescricao(event) {
    setNovaAnotacao({
      ...novaAnotacao,
      descricaoAnotacao: event.target.value,
    });
  }
  function handleNovaAnotacoesDisciplina(event) {
    setNovaAnotacao({
      ...novaAnotacao,
      disciplinaAnotacao: event.target.value,
    });
  }

  function editAnotacoes(id) {
    anotacaoList.map((el) => {
      if (el.anotacaoId === id) {
        el.descricaoAnotacao = editarAnotacao.descricaoAnotacao;
        el.disciplinaAnotacao = editarAnotacao.disciplinaAnotacao;
      }
    });
  }

  function deletarAnotacoes(id) {
    setAnotacoesList(anotacaoList.filter((el) => el.anotacaoId !== id));
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
          <button
            className="btn-criar-anotacao"
            onClick={handleClickOpenCriarAnotacao}
          >
            Criar nova anotação
          </button>
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
            {anotacaoList.map((el) => {
              return (
                <div key={el.id} className="anotacoes-tabela-body-line">
                  <div className="anotacoes-tabela-body-descricao">
                    <span>{el.descricaoAnotacao}</span>
                  </div>
                  <div className="anotacoes-tabela-body-disciplina">
                    <span>{el.disciplinaAnotacao}</span>
                  </div>
                  <div className="anotacoes-tabela-body-criado">
                    <span>{el.criadoEm}</span>
                  </div>
                  <div className="anotacoes-tabela-body-visualizar">
                    <span>
                      <MdRemoveRedEye
                        size={18}
                        color={"#0f4a8d"}
                        onClick={() => {
                          setEditarAnotacao({
                            anotacaoId: el.anotacaoId,
                            descricaoAnotacao: el.descricaoAnotacao,
                            disciplinaAnotacao: el.disciplinaAnotacao,
                          });
                          handleClickOpenVisualizar();
                        }}
                      />
                    </span>
                  </div>
                  <div className="anotacoes-tabela-body-acoes">
                    <MdMode
                      size={18}
                      color={"#0f4a8d"}
                      onClick={() => {
                        editAnotacoes();
                        setEditarAnotacao({
                          anotacaoId: el.anotacaoId,
                          descricaoAnotacao: el.descricaoAnotacao,
                          disciplinaAnotacao: el.disciplinaAnotacao,
                        });
                        handleClickOpenEditar();
                      }}
                    />
                    <MdOutlineDelete
                      size={18}
                      color="red"
                      onClick={() => {
                        deletarAnotacoes(el.anotacaoId);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
         
        </div>

        <Dialog
          fullWidth={"lg"}
          open={openDialogCriarAnotacao}
          onClose={handleCloseCriarAnotacao}
        >
          <DialogTitle>Criar nova anotação</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="disciplina-dialog"
              label="Disciplina"
              value={novaAnotacao.disciplinaAnotacao}
              onChange={handleNovaAnotacoesDisciplina}
              placeholder="Nome da disciplina"
              fullWidth
            />
            <TextField
              id="descricao-dialog"
              label="Descrição"
              multiline
              rows={7}
              value={novaAnotacao.descricaoAnotacao}
              onChange={handleNovaAnotacoesDescricao}
              placeholder="Descreva a nova tarefa aqui..."
              fullWidth
              style={{ marginTop: 40 }}
            />
          </DialogContent>
          <DialogActions>
            <button
              className="btn-dialog-close"
              onClick={handleCloseCriarAnotacao}
            >
              Cancelar
            </button>
            <button
              className="btn-dialog-submit"
              onClick={() => {
                anotacaoList.push({
                  ...novaAnotacao,
                  anotacaoId: anotacaoList.length,
                  criadoEm: getData(),
                });
                handleCloseCriarAnotacao();
                resetData();
              }}
            >
              Salvar
            </button>
          </DialogActions>
        </Dialog>

        <Dialog
          fullWidth={"lg"}
          open={openDialogEditar}
          onClose={handleCloseEditar}
        >
          <DialogTitle>Editar a anotação</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="disciplina-dialog-edit"
              label="Disciplina"
              fullWidth
              value={editarAnotacao.disciplinaAnotacao}
              onChange={handleEditDisciplinaAnotacoes}
            />
            <TextField
              id="descricao-dialog-edit"
              label="Descrição"
              multiline
              rows={7}
              value={editarAnotacao.descricaoAnotacao}
              onChange={handleEditDescricaoAnotacoes}
              fullWidth
              style={{ marginTop: 40 }}
            />
          </DialogContent>
          <DialogActions>
            <button className="btn-dialog-close" onClick={handleCloseEditar}>
              Cancelar
            </button>
            <button
              className="btn-dialog-submit"
              onClick={() => {
                editAnotacoes(editarAnotacao.anotacaoId);
                handleCloseEditar();
              }}
            >
              Salvar
            </button>
          </DialogActions>
        </Dialog>

        <Dialog
          fullWidth={"lg"}
          open={openDialogVisualizar}
          onClose={handleCloseVisualizar}
        >
          <DialogTitle>Visualização da anotação</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="disciplina-dialog"
              label="Disciplina"
              value={editarAnotacao.disciplinaAnotacao}
              disabled
              fullWidth
            />
            <TextField
              id="descricao-dialog"
              label="Descrição"
              multiline
              rows={7}
              value={editarAnotacao.descricaoAnotacao}
              fullWidth
              disabled
              style={{ marginTop: 40 }}
            />
          </DialogContent>
          <DialogActions>
            <button
              className="btn-dialog-close"
              onClick={handleCloseVisualizar}
            >
              Sair
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
