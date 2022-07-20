import "./styles.css";
import { useState } from "react";
import {
  MdRemoveRedEye,
  MdMode,
  MdOutlineDelete,
  MdOutlineCheck,
} from "react-icons/md";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Tarefas() {
  const [tarefasPendentes, setTarefasPendentes] = useState(true);
  const [tarefasRealizadas, setTarefasRealizadas] = useState(false);
  const [criarTarefas, setCriarTarefas] = useState(false);
  const [dataCriacao, setDataCriacao] = useState("");

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  function toggletarefasPendentes() {
    setTarefasPendentes(true);
    setTarefasRealizadas(false);
    setCriarTarefas(false);
  }
  function toggletarefasRealizadas() {
    setTarefasPendentes(false);
    setTarefasRealizadas(true);
    setCriarTarefas(false);
  }
  function toggleCriarTarefas() {
    setTarefasPendentes(false);
    setTarefasRealizadas(false);
    setCriarTarefas(true);
  }
  function visualizarTarefa(){
    console.log("Visualizar tarefa...")
  }
  function editarTarefa(){
    console.log("Editar tarefa...")
  }
  function deletarTarefa(){
    console.log("Deletar tarefa...")
  }
  function concluirTarefa(){
    console.log("Concluir tarefa...")
  }
  function deletarTarefaRealizada(){
    console.log("Deletar tarefa realizada...")
  }
  function salvarTarefa() {
    console.log("Salvar uma nova tarefa...");
  }
  
  return (
    <ThemeProvider theme={theme}>
      <div className="tarefas-container">
        <div className="tarefas-options-container">
          <span
            className={`tarefas-options-btn ${
              tarefasPendentes
                ? "tarefas-options-btn-tarefas-pendentes-selected"
                : ""
            }`}
            onClick={toggletarefasPendentes}
          >
            Tarefas Pendentes
          </span>
          <span
            className={`tarefas-options-btn ${
              tarefasRealizadas
                ? "tarefas-options-btn-tarefas-realizadas-selected"
                : ""
            }`}
            onClick={toggletarefasRealizadas}
          >
            Tarefas realizadas
          </span>
          <span
            className={`tarefas-options-btn ${
              criarTarefas ? "tarefas-options-btn-criar-tarefas-selected" : ""
            }`}
            onClick={toggleCriarTarefas}
          >
            Criar tarefas
          </span>
        </div>

        {tarefasPendentes ? (
          <>
            <div className="tarefas-pendentes-container">
              <div className="tarefas-pendentes-header-container">
                <div className="tarefas-pendentes-tabela-header-descricao">
                  <span>Descrição</span>
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
                <div className="tarefas-pendentes-body-descricao">
                  <span>Descrição da tarefa</span>
                </div>
                <div className="tarefas-pendentes-body-disciplina">
                  <span>Disciplina da tarefa</span>
                </div>
                <div className="tarefas-pendentes-body-criado">
                  <span>22/08/2022</span>
                </div>
                <div className="tarefas-pendentes-body-visualizar">
                  <span>
                    <MdRemoveRedEye
                      style={{ cursor: "pointer" }}
                      size={18}
                      color={"#0f4a8d"}
                      onClick={visualizarTarefa}
                    />
                  </span>
                </div>
                <div className="tarefas-pendentes-body-acoes">
                  <MdMode size={18} color={"#0f4a8d"} onClick={editarTarefa} />
                  <MdOutlineDelete
                    size={18}
                    color={"red"}
                    onClick={deletarTarefa}
                  />
                  <MdOutlineCheck
                    size={18}
                    color={"green"}
                    onClick={concluirTarefa}
                  />
                </div>
              </div>
            </div>
          </>
        ) : tarefasRealizadas ? (
          <>
            <div className="tarefas-realizadas-container">
              <div className="tarefas-realizadas-header-container">
                <div className="tarefas-realizadas-tabela-header-descricao">
                  <span>Descrição</span>
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
                <div className="tarefas-realizadas-body-descricao">
                  <span>Descrição da tarefa</span>
                </div>
                <div className="tarefas-realizadas-body-disciplina">
                  <span>Disciplina da tarefa</span>
                </div>
                <div className="tarefas-realizadas-body-criado">
                  <span>22/08/2022</span>
                </div>
                <div className="tarefas-realizadas-body-finalizado">
                  <span>23/08/2022</span>
                </div>
                <div className="tarefas-realizadas-body-acoes">
                  <MdOutlineDelete
                    size={18}
                    color={"red"}
                    onClick={deletarTarefaRealizada}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </>
        ) : criarTarefas ? (
          <>
            <div className="criar-tarefas-container">
              <div className="criar-tarefas-card-container">
                <span style={{ marginTop: "2%", color: "#0f4a8d" }}>
                  {" "}
                  Criar uma nova tarefa
                </span>
                <Box
                  component="form"
                  sx={{
                    m: 2,
                  }}
                  fullWidth
                >
                  <TextField
                    sx={{
                      width: "100%",
                    }}
                    id="outlined-basic"
                    label="Nome da tarefa"
                    variant="outlined"
                  />
                  <TextField
                    sx={{
                      width: "100%",
                      mt: 3,
                    }}
                    id="outlined-basic"
                    label="Pertence a disciplina"
                    variant="outlined"
                  />
                  <Box fullWidth sx={{ mt: 3 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Data de criação"
                        data={dataCriacao}
                        onChange={(newValue) => {
                          setDataCriacao(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            sx={{ width: "100%" }}
                            {...params}
                            centered
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <button className="btn-salvar-tarefa" onClick={salvarTarefa}>Salvar</button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </ThemeProvider>
  );
}
