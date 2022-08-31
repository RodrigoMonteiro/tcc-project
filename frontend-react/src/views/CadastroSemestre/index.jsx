import { useState } from "react";
import "./styles.css";

import { MdOutlineDelete } from "react-icons/md";

import { semestres } from "../../providers/dataTest/cadastrarSemestre";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function CadastroSemestre() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  const [optionCadastrarSelected, setOptionCadastrarSelected] = useState(true);
  const [optionEditarSelected, setOptionEditarSelected] = useState(false);

  const [semestreList, setSemestreList] = useState(semestres);

  const [semestre, setSemestre] = useState({
    nomeSemestre: "",
    disciplinas: [],
  });

  const [novoSemestre, setNovoSemestre] = useState("");
  const [novaDisciplinaSemestre, setNovaDisciplinaSemestre] = useState("");

  function adicionarDisciplina() {
    setSemestre({
      nomeSemestre: novoSemestre,
      disciplinas: [...semestre.disciplinas, novaDisciplinaSemestre],
    });
    setNovaDisciplinaSemestre("");
    console.log(semestre);
  }

  function deleteDisciplina(element) {

    semestreList.map((el, index) => {
      if (el.nomeSemestre === semestre.nomeSemestre) {
        
        setSemestre({
          ...semestre,
          disciplinas: semestre.disciplinas.filter((e) => e !== element),
        });

        setSemestreList([
          
         // code here
          
          {
            ...semestreList[index],
            [Object.keys(semestreList[index])[2]]: semestre.disciplinas
          },
        ]);
       
        console.log(semestreList[index ]);
      }
    });
  }
  function deleteSemestre() {
    console.log("deletar semestre...");
  }
  function salvarSemestre() {
    setSemestreList(
      semestreList,
      semestreList.push({
        semestreId: semestreList.length + 1,
        ...semestre,
        anotacoes: [],
        tarefas: [],
      })
    );

    setNovoSemestre("");
    setNovaDisciplinaSemestre("");

    setSemestre({
      nomeSemestre: "",
      disciplinas: [],
    });
    console.log(semestreList);
  }

  function toggleSelected() {
    setNovoSemestre("");
    setNovaDisciplinaSemestre("");

    setSemestre({
      nomeSemestre: "",
      disciplinas: [],
    });
    setOptionCadastrarSelected(!optionCadastrarSelected);
    setOptionEditarSelected(!optionEditarSelected);
  }

  function handleChangeSemestre(event) {
    let disciplinasAux = [];
    semestreList.map((e) => {
      if (e.nomeSemestre === event.target.value) {
        disciplinasAux = e.disciplinas;
      }
    });
    setSemestre({
      nomeSemestre: event.target.value,
      disciplinas: disciplinasAux,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="cadastro-semestre-container">
        <div className="cadastro-semestre-options">
          <span
            onClick={toggleSelected}
            className={`cadastro-semestre-btn-edit-options ${
              optionCadastrarSelected
                ? "cadastro-semestre-options-selected"
                : ""
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
            <Box component="form" sx={{ width: "85%" }}>
              <TextField
                id="filled-basic"
                label="Nome do semestre"
                variant="filled"
                fullWidth
                value={novoSemestre}
                onChange={(event) => {
                  setNovoSemestre(event.target.value);
                }}
              />
            </Box>
            <span className="cadastro-semestre-informacao-cadastrar">
              Disciplinas que pertencem a este período
            </span>
            <Box component="form" sx={{ width: "85%" }}>
              <TextField
                id="filled-basic"
                label="Nome da disciplina"
                variant="filled"
                fullWidth
                value={novaDisciplinaSemestre}
                onChange={(event) => {
                  setNovaDisciplinaSemestre(event.target.value);
                }}
              />
            </Box>
            <div className="cadastro-semestre-btn-actions-cadastrar">
              <button
                className="btn-adicionar-semestre-cadastrar"
                onClick={adicionarDisciplina}
              >
                Adicionar disciplina
              </button>
              <button className="btn-salvar-cadastrar" onClick={salvarSemestre}>
                Salvar Semestre
              </button>
            </div>
          </div>
        ) : (
          <div className="cadastro-semestre-card-editar">
            <span className="cadastro-semestre-span-editar">
              Editar semestres
            </span>
            <Box sx={{ width: "90%" }} centered>
              <FormControl fullWidth className="cadastro-semestre">
                <InputLabel id="selecionar-semestre-editar">
                  Semestre
                </InputLabel>
                <Select
                  labelId="editar-semestre-editar"
                  id="editar semestre"
                  value={semestre.nomeSemestre}
                  label="Semestre"
                  onChange={(event) => {
                    handleChangeSemestre(event);
                  }}
                >
                  {semestreList.map((el) => {
                    return (
                      <MenuItem
                        key={el.semestreId}
                        className="cadastro-semestre-menuItem-editar"
                        defaultValue="2021.1"
                        value={el.nomeSemestre}
                      >
                        {el.nomeSemestre}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <div className="cadastro-semestre-tabela-container-editar">
              <div className="cadastro-semestre-tabela-header-editar">
                <span
                  style={{ width: "62.5%" }}
                  className="cadastro-semestre-tabela-header-span-editar"
                >
                  Disciplina
                </span>
                <span
                  style={{ width: "37.5%" }}
                  className="cadastro-semestre-tabela-header-span-editar"
                >
                  Ações
                </span>
              </div>
              <div className="cadastro-semestre-tabela-body-editar">
                {semestre.disciplinas.map((e) => {
                  return (
                    <div
                      key={e.semestreId}
                      className="cadastro-semestre-tabela-body-line-editar"
                    >
                      <span style={{ width: "69%", paddingLeft: "5px" }}>
                        {e}
                      </span>
                      <span
                        style={{
                          width: "31%",
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        {/* <MdMode
                          color="#0f4a8d"
                          size={18}
                          style={{ marginRight: 15, cursor: "pointer" }}
                          onClick={editDisciplina}
                        /> */}
                        <MdOutlineDelete
                          color="red"
                          size={18}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            deleteDisciplina(e);
                          }}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cadastro-semestre-btn-actions-editar">
              <button className="btn-deletar-semestre" onClick={deleteSemestre}>
                Deletar semestre
              </button>
              <button
                className="btn-adicionar-disciplina"
                onClick={adicionarDisciplina}
              >
                Adicionar disciplina
              </button>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
