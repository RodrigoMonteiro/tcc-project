//NOSONAR
import "./styles.css";
import { useState, useContext } from "react";
import {
  MdRemoveRedEye,
  MdMode,
  MdOutlineDelete,
  MdOutlineCheck,
} from "react-icons/md";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  tarefasPendentesList as listaTarefasPendentes,
  tarefasRealizadasList as listaTarefasRealizadas,
} from "../../providers/dataTest/tarefas";

import Box from "@mui/material/Box";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalContext } from "../../providers/globalProps";

export function Tarefas() {
  const [tarefasPendentesList, setTarefasPendentesList] = useState(
    listaTarefasPendentes
  );
  const [tarefasRealizadasList, setTarefasRealizadasList] = useState(
    listaTarefasRealizadas
  );

  const [isTarefasPendentes, setIsTarefasPendentes] = useState(true);
  const [isTarefasRealizadas, setIsTarefasRealizadas] = useState(false);
  const [isCriarTarefas, setIsCriarTarefas] = useState(false);

  const [openDialogVisualizarTarefa, setOpenDialogVisualizarTarefa] =
    useState(false);
  const [openDialogEditarTarefa, setOpenDialogEditarTarefa] = useState(false);

  const [tarefaPendente, setTarefaPendente] = useState({
    tarefaId: "",
    tarefaDescricao: "",
    tarefaDisciplina: "",
    tarefaCriadoEm: "",
    tarefaFinalizadoEm: "",
  });

  const [tarefaRealizada, setTarefaRealizada] = useState({
    tarefaId: "",
    tarefaDescricao: "testerealizada",
    tarefaDisciplina: "testerealizada",
    tarefaCriadoEm: "",
    tarefaFinalizadoEm: "",
  });
 const {globalProps} = useContext(GlobalContext)
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
        color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
        letterSpacing: "0.04rem",
      },
    },
  });

  const handleClickOpenVisualizarTarefa = () => {
    setOpenDialogVisualizarTarefa(true);
  };

  const handleCloseVisualizarTarefa = () => {
    setOpenDialogVisualizarTarefa(false);
  };

  const handleClickOpenEditarTarefa = () => {
    setOpenDialogEditarTarefa(true);
  };

  const handleCloseEditarTarefa = () => {
    setOpenDialogEditarTarefa(false);
  };

  function handleDisciplinaTarefaPendente(event) {
    setTarefaPendente({
      ...tarefaPendente,
      tarefaDisciplina: event.target.value,
    });
  }
  function handleDescricaoTarefaPendente(event) {
    setTarefaPendente({
      ...tarefaPendente,
      tarefaDescricao: event.target.value,
    });
  }

  function toggleTarefasPendentes() {
    setIsTarefasPendentes(true);
    setIsTarefasRealizadas(false);
    setIsCriarTarefas(false);
  }
  function toggleTarefasRealizadas() {
    setIsTarefasPendentes(false);
    setIsTarefasRealizadas(true);
    setIsCriarTarefas(false);
  }
  function toggleCriarTarefas() {
    setIsTarefasPendentes(false);
    setIsTarefasRealizadas(false);
    setIsCriarTarefas(true);
  }

  function editTarefa(id) {
    tarefasPendentesList.map((el) => {
      if (el.tarefaId === id) {
        el.tarefaDisciplina = tarefaPendente.tarefaDisciplina;
        el.tarefaDescricao = tarefaPendente.tarefaDescricao;
      }
    });
  }
  function deletarTarefaPendente(id) {
    setTarefasPendentesList(
      tarefasPendentesList.filter((el) => el.tarefaId !== id)
    );
  }
  function deletarTarefaRealizada(id) {
    setTarefasRealizadasList(
      tarefasRealizadasList.filter((el) => el.tarefaId !== id)
    );
  }
  function concluirTarefaPendente(id) {
    tarefasPendentesList.map((el) => {
      if (el.tarefaId === id) {
        tarefasRealizadasList.push({ ...el, tarefaFinalizadaEm: getData() });
        setTarefasPendentesList(
          tarefasPendentesList.filter((e) => e.tarefaId !== id)
        );
      }
    });
  }

  function salvarTarefa() {
    tarefasPendentesList.push({
      ...tarefaPendente,
      tarefaId: tarefasPendentesList.length + tarefasRealizadasList.length,
      tarefaCriadoEm: getData()
    });
  }

  function getData() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return `${dd}/${mm}/${yyyy}`;
  }

  function resetDataTarefaPendente() {
    setTarefaPendente({
      tarefaId: "",
      tarefaDescricao: "",
      tarefaDisciplina: "",
      tarefaCriadoEm: "",
      tarefaFinalizadoEm: "",
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="tarefas-container">
        <div className="tarefas-options-container">
          <span
            className={`tarefas-options-btn ${
              isTarefasPendentes
                ? "tarefas-options-btn-tarefas-pendentes-selected"
                : ""
            }`}
            onClick={toggleTarefasPendentes}
          >
            Tarefas Pendentes
          </span>
          <span
            className={`tarefas-options-btn ${
              isTarefasRealizadas
                ? "tarefas-options-btn-tarefas-realizadas-selected"
                : ""
            }`}
            onClick={toggleTarefasRealizadas}
          >
            Tarefas realizadas
          </span>
          <span
            className={`tarefas-options-btn ${
              isCriarTarefas ? "tarefas-options-btn-criar-tarefas-selected" : ""
            }`}
            onClick={toggleCriarTarefas}
          >
            Criar tarefas
          </span>
        </div>

        {isTarefasPendentes ? (
          <>
            <div className="tarefas-pendentes-container">
              <div className="tarefas-pendentes-header-container">
                <div className="tarefas-pendentes-tabela-header-descricao">
                  <span>Descrição da tarefa</span>
                </div>
                <div className="tarefas-pendentes-tabela-header-disciplina">
                  <span>Disciplina</span>
                </div>
                <div className="tarefas-pendentes-tabela-header-criado">
                  <span>Criado em</span>
                </div>
                <div className="tarefas-pendentes-tabela-header-visualizar">
                  <span>Visualizar</span>
                </div>
                <div className="tarefas-pendentes-tabela-header-acoes">
                  <span>Ações</span>
                </div>
              </div>

              <div className="tarefas-pendentes-body-container">
                {tarefasPendentesList.map((el) => {
                  return (
                    <div
                      key={el.tarefaId}
                      className="tarefas-pendentes-body-line"
                    >
                      <div className="tarefas-pendentes-body-descricao">
                        <span>{el.tarefaDescricao}</span>
                      </div>
                      <div className="tarefas-pendentes-body-disciplina">
                        <span>{el.tarefaDisciplina}</span>
                      </div>
                      <div className="tarefas-pendentes-body-criado">
                        <span>{el.tarefaCriadoEm}</span>
                      </div>
                      <div className="tarefas-pendentes-body-visualizar">
                        <span>
                          <MdRemoveRedEye
                            style={{ cursor: "pointer" }}
                            size={18}
                            color={"#0f4a8d"}
                            onClick={() => {
                              setTarefaPendente({
                                ...el,
                              });

                              handleClickOpenVisualizarTarefa();
                            }}
                          />
                        </span>
                      </div>
                      <div className="tarefas-pendentes-body-acoes">
                        <MdMode
                          size={18}
                          color={"#0f4a8d"}
                          onClick={() => {
                            setTarefaPendente({
                              ...el,
                            });
                            handleClickOpenEditarTarefa();
                          }}
                        />
                        <MdOutlineDelete
                          size={18}
                          color={"red"}
                          onClick={() => {
                            deletarTarefaPendente(el.tarefaId);
                          }}
                        />
                        <MdOutlineCheck
                          size={18}
                          color={"green"}
                          onClick={() => {
                            concluirTarefaPendente(el.tarefaId);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : isTarefasRealizadas ? (
          <>
            <div className="tarefas-realizadas-container">
              <div className="tarefas-realizadas-header-container">
                <div className="tarefas-realizadas-tabela-header-descricao">
                  <span>Descrição da tarefa</span>
                </div>
                <div className="tarefas-realizadas-tabela-header-disciplina">
                  <span>Disciplina</span>
                </div>
                <div className="tarefas-realizadas-tabela-header-criado">
                  <span>Criado em</span>
                </div>
                <div className="tarefas-realizadas-tabela-header-finalizado">
                  <span>Finalizado em</span>
                </div>
                <div className="tarefas-realizadas-tabela-header-acoes">
                  <span>Ações</span>
                </div>
              </div>
              <div className="tarefas-realizadas-body-container">
                {tarefasRealizadasList.map((el) => {
                  return (
                    <div
                      key={el.tarefaId}
                      className="tarefas-realizadas-body-line"
                    >
                      <div className="tarefas-realizadas-body-descricao">
                        <span>{el.tarefaDescricao}</span>
                      </div>
                      <div className="tarefas-realizadas-body-disciplina">
                        <span>{el.tarefaDisciplina}</span>
                      </div>
                      <div className="tarefas-realizadas-body-criado">
                        <span>{el.tarefaCriadoEm}</span>
                      </div>
                      <div className="tarefas-realizadas-body-finalizado">
                        <span>{el.tarefaFinalizadaEm}</span>
                      </div>
                      <div className="tarefas-realizadas-body-acoes">
                        <MdOutlineDelete
                          size={18}
                          color={"red"}
                          onClick={() => {
                            deletarTarefaRealizada(el.tarefaId);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : isCriarTarefas ? (
          <>
            <div className="criar-tarefas-container">
              <div className="criar-tarefas-card-container">
                <span style={{ marginTop: "2%", color: "#1976d2" }}>
                  {" "}
                  Criar uma nova tarefa
                </span>
                <Box
                  component="form"
                  sx={{
                    m: 2,
                    width: "85%",
                  }}
                >
                  <TextField
                    sx={{
                      width: "100%",
                    }}
                    id="outlined-basic"
                    label="Nome da tarefa"
                    variant="outlined"
                    value={tarefaPendente.tarefaDescricao}
                    onChange={handleDescricaoTarefaPendente}
                    />
                  <TextField
                    sx={{
                      width: "100%",
                      marginTop: "15%",
                    }}
                    id="outlined-basic"
                    label="Pertence a disciplina"
                    variant="outlined"
                    value={tarefaPendente.tarefaDisciplina}
                    onChange={handleDisciplinaTarefaPendente}
                  />
                </Box>
                <button
                  className="btn-salvar-tarefa"
                  onClick={() => {
                    salvarTarefa();
                    resetDataTarefaPendente();
                  }}
                >
                  Salvar
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      <Dialog
        fullWidth={"lg"}
        open={openDialogVisualizarTarefa}
        onClose={handleCloseVisualizarTarefa}
      >
        <DialogTitle sx={{ color: "#0f4a8d" }}>
          Visualização da tarefa pendente
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="disciplina-dialog"
            label="Disciplina"
            value={tarefaPendente.tarefaDisciplina}
            disabled
            fullWidth
          />
          <TextField
            id="descricao-dialog"
            label="Descrição"
            multiline
            rows={7}
            value={tarefaPendente.tarefaDescricao}
            fullWidth
            disabled
            style={{ marginTop: 40 }}
          />
        </DialogContent>
        <DialogActions>
          <button
            className="tarefas-btn-dialog-close"
            onClick={handleCloseVisualizarTarefa}
          >
            Sair
          </button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={"lg"}
        open={openDialogEditarTarefa}
        onClose={handleCloseEditarTarefa}
      >
        <DialogTitle sx={{ color: "#0f4a8d" }}>Editar tarefa</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="disciplina-dialog"
            label="Disciplina"
            value={tarefaPendente.tarefaDisciplina}
            onChange={handleDisciplinaTarefaPendente}
            fullWidth
          />
          <TextField
            id="descricao-dialog"
            label="Descrição"
            multiline
            rows={7}
            value={tarefaPendente.tarefaDescricao}
            onChange={handleDescricaoTarefaPendente}
            fullWidth
            style={{ marginTop: 40 }}
          />
        </DialogContent>
        <DialogActions>
          <button
            className="tarefas-btn-dialog-close"
            onClick={handleCloseEditarTarefa}
          >
            Sair
          </button>
          <button
            className="tarefas-btn-dialog-submit"
            onClick={() => {
              editTarefa(tarefaPendente.tarefaId);
              handleCloseEditarTarefa();
            }}
          >
            Salvar
          </button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
