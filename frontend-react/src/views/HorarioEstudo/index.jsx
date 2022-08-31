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

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  horarioEstudoMatutino as listaHorarioEstudoMatutino,
  horarioEstudoVespertino as listaHorarioEstudoVespertino,
  horarioEstudoNoturno as listaHorarioEstudoNoturno,
} from "../../providers/dataTest/horarioEstudo";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useState } from "react";

export function HorarioEstudo() {
  
  const [isFimSemana, setIsFimSemana] = useState("Nao");
  const [turnoEstudoSelected, setIsTurnoEstudoSelected] = useState("Matutino");
  const [semestreEstudoSelected, setSemestreEstudoSelected] =
    useState("2021.1");
  const [acaoEstudoSelected, setAcaoEstudoSelected] = useState("Visualizar");
  const [openDialogHorarioEstudo, setOpenDialogHorarioEstudo] = useState(false);

  const [horarioEstudoMatutinoList, setHorarioEstudoMatutinoList] = useState(
    listaHorarioEstudoMatutino
  );
  const [horarioEstudoVespertinoList, setHorarioEstudoVespertinoList] =
    useState(listaHorarioEstudoVespertino);
  
  const [horarioEstudoNoturnoList, setHorarioEstudoNoturnoList] = useState(
    listaHorarioEstudoNoturno
  );

  const [horarioEstudo, setHorarioEstudo] = useState({
    horarioEstudoId: 0,
    horarioInicio: "",
    horarioFim: "",
    segunda: "",
    terca: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sabado: "",
    domingo: "",
  });

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  const handleClickOpenHorarioEstudo = () => {
    setOpenDialogHorarioEstudo(true);
  };

  const handleCloseHorarioEstudo = () => {
    setOpenDialogHorarioEstudo(false);
  };

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

  function handleChangeHorarioEstudoHorarioInicio(event) {
    setHorarioEstudo({ ...horarioEstudo, horarioInicio: event.target.value });
  }
  function handleChangeHorarioEstudoHorarioFim(event) {
    setHorarioEstudo({ ...horarioEstudo, horarioFim: event.target.value });
  }
  function handleChangeHorarioEstudoSegunda(event) {
    setHorarioEstudo({ ...horarioEstudo, segunda: event.target.value });
  }
  function handleChangeHorarioEstudoTerca(event) {
    setHorarioEstudo({ ...horarioEstudo, terca: event.target.value });
  }
  function handleChangeHorarioEstudoQuarta(event) {
    setHorarioEstudo({ ...horarioEstudo, quarta: event.target.value });
  }
  function handleChangeHorarioEstudoQuinta(event) {
    setHorarioEstudo({ ...horarioEstudo, quinta: event.target.value });
  }
  function handleChangeHorarioEstudoSexta(event) {
    setHorarioEstudo({ ...horarioEstudo, sexta: event.target.value });
  }
  function handleChangeHorarioEstudoSabado(event) {
    setHorarioEstudo({ ...horarioEstudo, sabado: event.target.value });
  }
  function handleChangeHorarioEstudoDomingo(event) {
    setHorarioEstudo({ ...horarioEstudo, domingo: event.target.value });
  }
  function salvarHorario() {
    
    setHorarioEstudo({
      ...horarioEstudo,
      horarioEstudoId:
        horarioEstudoMatutinoList.length +
        horarioEstudoVespertinoList.length +
        horarioEstudoNoturnoList.length +
        1,
    });

    if (turnoEstudoSelected === "Matutino") {
      horarioEstudoMatutinoList.push(horarioEstudo)
    } else if (turnoEstudoSelected === "Vespertino") {
      horarioEstudoVespertinoList.push(horarioEstudo);
    } else {
      horarioEstudoNoturnoList.push(horarioEstudo);
    }
  }
  function resetHorarioEstudoData() {
    setHorarioEstudo({
      horarioEstudoId: 0,
      horarioInicio: "",
      horarioFim: "",
      segunda: "",
      terca: "",
      quarta: "",
      quinta: "",
      sexta: "",
      sabado: "",
      domingo: "",
    });
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
          <div className="btn-add-horario-container">
            <button
              className="btn-add-horario"
              onClick={handleClickOpenHorarioEstudo}
            >
              + Adicionar novo horário
            </button>
          </div>
        </div>
        <div className="horario-estudo-tabela-container">
          <div className={`horario-estudo-tabela-header-container`}>
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
          <div
            className={`horario-estudo-tabela-container ${
              acaoEstudoSelected === "Visualizar" ? "visualizar-mode" : ""
            }`}
          >
            {turnoEstudoSelected === "Matutino"
              ? horarioEstudoMatutinoList.map((el) => {
                  return (
                    <div
                      key={el.horarioEstudoId}
                      className="horario-estudo-tabela-body-line"
                    >
                      <div className="anotacoes-tabela-body-horario">
                        <span>{`${el.horarioInicio} - ${el.horarioFim}`}</span>
                      </div>
                      <div className="anotacoes-tabela-body-segunda">
                        <input
                          className="anotacoes-tabela-body-input"
                          type="text"
                          value={el.segunda}
                          onChange={(event) => {
                            horarioEstudoMatutinoList.map((e, index) => {
                              if (e.horarioEstudoId === el.horarioEstudoId) {

                               if(horarioEstudoMatutinoList.length <= 1){
                                 setHorarioEstudoMatutinoList([
                                   {
                                     ...horarioEstudoMatutinoList[index],
                                     [Object.keys(
                                       horarioEstudoMatutinoList[index]
                                     )[3]]: event.target.value,
                                   },
                                 ]);
                               } else {
                                setHorarioEstudoMatutinoList([
                                  ...horarioEstudoMatutinoList,
                                  {
                                    ...horarioEstudoMatutinoList[index],
                                    [Object.keys(
                                      horarioEstudoMatutinoList[index]
                                    )[3]]: event.target.value,
                                  },
                                ]);
                               }
                                    
                                  console.log(
                                    
                                      horarioEstudoMatutinoList
                                    
                                  );
                              }
                            });
                          }}
                        />
                      </div>
                      <div className="anotacoes-tabela-body-terca">
                        <input
                          className="anotacoes-tabela-body-input"
                          type="text"
                          value={el.terca}
                          onChange={(event) => {
                            horarioEstudoMatutinoList.map((e, index) => {
                              if (e.horarioEstudoId === el.horarioEstudoId) {
                                setHorarioEstudoMatutinoList([
                                  {
                                    ...horarioEstudoMatutinoList[index],
                                    [Object.keys(
                                      horarioEstudoMatutinoList[index]
                                    )[4]]: event.target.value,
                                  },
                                ]);
                              }
                              // console.log(horarioEstudoMatutinoList)
                            });
                          }}
                        />
                      </div>
                      <div className="anotacoes-tabela-body-quarta">
                        <input
                          className="anotacoes-tabela-body-input"
                          type="text"
                          value={el.quarta}
                          onChange={(event) => {
                            horarioEstudoMatutinoList.map((e, index) => {
                              if (e.horarioEstudoId === el.horarioEstudoId) {
                                setHorarioEstudoMatutinoList([
                                  {
                                    ...horarioEstudoMatutinoList[index],
                                    [Object.keys(
                                      horarioEstudoMatutinoList[index]
                                    )[5]]: event.target.value,
                                  },
                                ]);
                              }
                              // console.log(horarioEstudoMatutinoList)
                            });
                          }}
                        />
                      </div>
                      <div className="anotacoes-tabela-body-quinta">
                        <input
                          className="anotacoes-tabela-body-input"
                          type="text"
                          value={el.quinta}
                          onChange={(event) => {
                            horarioEstudoMatutinoList.map((e, index) => {
                              if (e.horarioEstudoId === el.horarioEstudoId) {
                                setHorarioEstudoMatutinoList([
                                  {
                                    ...horarioEstudoMatutinoList[index],
                                    [Object.keys(
                                      horarioEstudoMatutinoList[index]
                                    )[6]]: event.target.value,
                                  },
                                ]);
                              }
                              // console.log(horarioEstudoMatutinoList)
                            });
                          }}
                        />
                      </div>
                      <div className="anotacoes-tabela-body-sexta">
                        <input
                          className="anotacoes-tabela-body-input"
                          type="text"
                          value={el.sexta}
                          onChange={(event) => {
                            horarioEstudoMatutinoList.map((e, index) => {
                              if (e.horarioEstudoId === el.horarioEstudoId) {
                                setHorarioEstudoMatutinoList([
                                  {
                                    ...horarioEstudoMatutinoList[index],
                                    [Object.keys(
                                      horarioEstudoMatutinoList[index]
                                    )[7]]: event.target.value,
                                  },
                                ]);
                              }
                              // console.log(horarioEstudoMatutinoList)
                            });
                          }}
                        />
                      </div>

                      {isFimSemana === "Sim" ? (
                        <>
                          <div className="anotacoes-tabela-body-sabado">
                            <input
                              className="anotacoes-tabela-body-input"
                              type="text"
                              value={el.sabado}
                              onChange={(event) => {
                                horarioEstudoMatutinoList.map((e, index) => {
                                  if (
                                    e.horarioEstudoId === el.horarioEstudoId
                                  ) {
                                    setHorarioEstudoMatutinoList([
                                      {
                                        ...horarioEstudoMatutinoList[index],
                                        [Object.keys(
                                          horarioEstudoMatutinoList[index]
                                        )[8]]: event.target.value,
                                      },
                                    ]);
                                  }
                                  // console.log(horarioEstudoMatutinoList)
                                });
                              }}
                            />
                          </div>
                          <div className="anotacoes-tabela-body-domingo">
                            <input
                              className="anotacoes-tabela-body-input"
                              type="text"
                              value={el.domingo}
                              onChange={(event) => {
                                horarioEstudoMatutinoList.map((e, index) => {
                                  if (
                                    e.horarioEstudoId === el.horarioEstudoId
                                  ) {
                                    setHorarioEstudoMatutinoList([
                                      {
                                        ...horarioEstudoMatutinoList[index],
                                        [Object.keys(
                                          horarioEstudoMatutinoList[index]
                                        )[9]]: event.target.value,
                                      },
                                    ]);
                                  }
                                  console.log(horarioEstudoMatutinoList);
                                });
                              }}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              : turnoEstudoSelected === "Vespertino"
              ? horarioEstudoVespertinoList.map((el) => {
                  return (
                    <div
                      key={el.horarioEstudoId}
                      className="horario-estudo-tabela-body-line"
                    >
                      <div className="anotacoes-tabela-body-horario">
                        <span>{`${el.horarioInicio} - ${el.horarioFim}`}</span>
                      </div>
                      <div className="anotacoes-tabela-body-segunda">
                        <span>{el.segunda}</span>
                      </div>
                      <div className="anotacoes-tabela-body-terca">
                        <span>{el.terca}</span>
                      </div>
                      <div className="anotacoes-tabela-body-quarta">
                        <span>{el.quarta}</span>
                      </div>
                      <div className="anotacoes-tabela-body-quinta">
                        <span>{el.quinta}</span>
                      </div>
                      <div className="anotacoes-tabela-body-sexta">
                        <span>{el.sexta}</span>
                      </div>

                      {isFimSemana === "Sim" ? (
                        <>
                          <div className="anotacoes-tabela-body-sabado">
                            <span>{el.sabado}</span>
                          </div>
                          <div className="anotacoes-tabela-body-domingo">
                            <span>{el.domingo}</span>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              : turnoEstudoSelected === "Noturno"
              ? horarioEstudoNoturnoList.map((el) => {
                  return (
                    <div
                      key={el.horarioEstudoId}
                      className="horario-estudo-tabela-body-line"
                    >
                      <div className="anotacoes-tabela-body-horario">
                        <span>{`${el.horarioInicio} - ${el.horarioFim}`}</span>
                      </div>
                      <div className="anotacoes-tabela-body-segunda">
                        <span>{el.segunda}</span>
                      </div>
                      <div className="anotacoes-tabela-body-terca">
                        <span>{el.terca}</span>
                      </div>
                      <div className="anotacoes-tabela-body-quarta">
                        <span>{el.quarta}</span>
                      </div>
                      <div className="anotacoes-tabela-body-quinta">
                        <span>{el.quinta}</span>
                      </div>
                      <div className="anotacoes-tabela-body-sexta">
                        <span>{el.sexta}</span>
                      </div>

                      {isFimSemana === "Sim" ? (
                        <>
                          <div className="anotacoes-tabela-body-sabado">
                            <span>{el.sabado}</span>
                          </div>
                          <div className="anotacoes-tabela-body-domingo">
                            <span>{el.domingo}</span>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        {turnoEstudoSelected === "Matutino" ? (
          <Dialog
            open={openDialogHorarioEstudo}
            onClose={handleCloseHorarioEstudo}
          >
            <DialogTitle>Criar novo horário de estudo</DialogTitle>

            <DialogContent>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de início do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioInicio}
                    label="Horario de início do estudo"
                    onChange={handleChangeHorarioEstudoHorarioInicio}
                  >
                    <MenuItem value={"06:00"}>06:00</MenuItem>
                    <MenuItem value={"07:00"}>07:00</MenuItem>
                    <MenuItem value={"08:00"}>08:00</MenuItem>
                    <MenuItem value={"09:00"}>09:00</MenuItem>
                    <MenuItem value={"10:00"}>10:00</MenuItem>
                    <MenuItem value={"11:00"}>11:00</MenuItem>
                    <MenuItem value={"12:00"}>12:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de fim do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioFim}
                    label="Horario do fim do estudo"
                    onChange={handleChangeHorarioEstudoHorarioFim}
                  >
                    <MenuItem value={"06:00"}>06:00</MenuItem>
                    <MenuItem value={"07:00"}>07:00</MenuItem>
                    <MenuItem value={"08:00"}>08:00</MenuItem>
                    <MenuItem value={"09:00"}>09:00</MenuItem>
                    <MenuItem value={"09:00"}>09:00</MenuItem>
                    <MenuItem value={"10:00"}>10:00</MenuItem>
                    <MenuItem value={"11:00"}>11:00</MenuItem>
                    <MenuItem value={"12:00"}>12:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-segunda-dialog"
                label="Segunda-feira"
                value={horarioEstudo.segunda}
                onChange={handleChangeHorarioEstudoSegunda}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-terca-dialog"
                label="Terça-feira"
                value={horarioEstudo.terca}
                onChange={handleChangeHorarioEstudoTerca}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quarta-dialog"
                label="Quarta-feira"
                value={horarioEstudo.quarta}
                onChange={handleChangeHorarioEstudoQuarta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quinta-dialog"
                label="Quinta-feira"
                value={horarioEstudo.quinta}
                onChange={handleChangeHorarioEstudoQuinta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-sexta-dialog"
                label="Sexta-feira"
                value={horarioEstudo.sexta}
                onChange={handleChangeHorarioEstudoSexta}
                fullWidth
              />
              {isFimSemana === "Sim" ? (
                <>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-sabado-dialog"
                    label="Sabado"
                    value={horarioEstudo.sabado}
                    onChange={handleChangeHorarioEstudoSabado}
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-domingo-dialog"
                    label="Domingo"
                    value={horarioEstudo.domingo}
                    onChange={handleChangeHorarioEstudoDomingo}
                    fullWidth
                  />
                </>
              ) : (
                <></>
              )}
            </DialogContent>

            <DialogActions>
              <button
                className="btn-dialog-close"
                onClick={handleCloseHorarioEstudo}
              >
                Cancelar
              </button>
              <button
                className="btn-dialog-submit"
                onClick={() => {
                  salvarHorario();
                  resetHorarioEstudoData();
                  handleCloseHorarioEstudo();
                }}
              >
                Salvar
              </button>
            </DialogActions>
          </Dialog>
        ) : turnoEstudoSelected === "Vespertino" ? (
          <Dialog
            open={openDialogHorarioEstudo}
            onClose={handleCloseHorarioEstudo}
          >
            <DialogTitle>Criar novo horário de estudo</DialogTitle>

            <DialogContent>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de início do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioInicio}
                    label="Horario de início do estudo"
                    onChange={handleChangeHorarioEstudoHorarioInicio}
                  >
                    <MenuItem value={"12:00"}>12:00</MenuItem>
                    <MenuItem value={"13:00"}>13:00</MenuItem>
                    <MenuItem value={"14:00"}>14:00</MenuItem>
                    <MenuItem value={"15:00"}>15:00</MenuItem>
                    <MenuItem value={"16:00"}>16:00</MenuItem>
                    <MenuItem value={"17:00"}>17:00</MenuItem>
                    <MenuItem value={"18:00"}>18:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de fim do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioFim}
                    label="Horario do fim do estudo"
                    onChange={handleChangeHorarioEstudoHorarioFim}
                  >
                    <MenuItem value={"12:00"}>12:00</MenuItem>
                    <MenuItem value={"13:00"}>13:00</MenuItem>
                    <MenuItem value={"14:00"}>14:00</MenuItem>
                    <MenuItem value={"15:00"}>15:00</MenuItem>
                    <MenuItem value={"16:00"}>16:00</MenuItem>
                    <MenuItem value={"17:00"}>17:00</MenuItem>
                    <MenuItem value={"18:00"}>18:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-segunda-dialog"
                label="Segunda-feira"
                value={horarioEstudo.segunda}
                onChange={handleChangeHorarioEstudoSegunda}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-terca-dialog"
                label="Terça-feira"
                value={horarioEstudo.terca}
                onChange={handleChangeHorarioEstudoTerca}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quarta-dialog"
                label="Quarta-feira"
                value={horarioEstudo.quarta}
                onChange={handleChangeHorarioEstudoQuarta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quinta-dialog"
                label="Quinta-feira"
                value={horarioEstudo.quinta}
                onChange={handleChangeHorarioEstudoQuinta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-sexta-dialog"
                label="Sexta-feira"
                value={horarioEstudo.sexta}
                onChange={handleChangeHorarioEstudoSexta}
                fullWidth
              />
              {isFimSemana === "Sim" ? (
                <>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-sabado-dialog"
                    label="Sabado"
                    value={horarioEstudo.sabado}
                    onChange={handleChangeHorarioEstudoSabado}
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-domingo-dialog"
                    label="Domingo"
                    value={horarioEstudo.domingo}
                    onChange={handleChangeHorarioEstudoDomingo}
                    fullWidth
                  />
                </>
              ) : (
                <></>
              )}
            </DialogContent>

            <DialogActions>
              <button
                className="btn-dialog-close"
                onClick={handleCloseHorarioEstudo}
              >
                Cancelar
              </button>
              <button
                className="btn-dialog-submit"
                onClick={() => {
                  salvarHorario();
                  resetHorarioEstudoData();
                  handleCloseHorarioEstudo();
                }}
              >
                Salvar
              </button>
            </DialogActions>
          </Dialog>
        ) : turnoEstudoSelected === "Noturno" ? (
          <Dialog
            open={openDialogHorarioEstudo}
            onClose={handleCloseHorarioEstudo}
          >
            <DialogTitle>Criar novo horário de estudo</DialogTitle>

            <DialogContent>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de início do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioInicio}
                    label="Horario de início do estudo"
                    onChange={handleChangeHorarioEstudoHorarioInicio}
                  >
                    <MenuItem value={"18:00"}>18:00</MenuItem>
                    <MenuItem value={"19:00"}>19:00</MenuItem>
                    <MenuItem value={"20:00"}>20:00</MenuItem>
                    <MenuItem value={"21:00"}>21:00</MenuItem>
                    <MenuItem value={"22:00"}>22:00</MenuItem>
                    <MenuItem value={"23:00"}>23:00</MenuItem>
                    <MenuItem value={"00:00"}>00:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 180, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-select-small">
                    Horário de fim do estudo
                  </InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={horarioEstudo.horarioFim}
                    label="Horario do fim do estudo"
                    onChange={handleChangeHorarioEstudoHorarioFim}
                  >
                    <MenuItem value={"18:00"}>18:00</MenuItem>
                    <MenuItem value={"19:00"}>19:00</MenuItem>
                    <MenuItem value={"20:00"}>20:00</MenuItem>
                    <MenuItem value={"21:00"}>21:00</MenuItem>
                    <MenuItem value={"22:00"}>22:00</MenuItem>
                    <MenuItem value={"23:00"}>23:00</MenuItem>
                    <MenuItem value={"00:00"}>00:00</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-segunda-dialog"
                label="Segunda-feira"
                value={horarioEstudo.segunda}
                onChange={handleChangeHorarioEstudoSegunda}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-terca-dialog"
                label="Terça-feira"
                value={horarioEstudo.terca}
                onChange={handleChangeHorarioEstudoTerca}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quarta-dialog"
                label="Quarta-feira"
                value={horarioEstudo.quarta}
                onChange={handleChangeHorarioEstudoQuarta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-quinta-dialog"
                label="Quinta-feira"
                value={horarioEstudo.quinta}
                onChange={handleChangeHorarioEstudoQuinta}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="horario-estudo-sexta-dialog"
                label="Sexta-feira"
                value={horarioEstudo.sexta}
                onChange={handleChangeHorarioEstudoSexta}
                fullWidth
              />
              {isFimSemana === "Sim" ? (
                <>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-sabado-dialog"
                    label="Sabado"
                    value={horarioEstudo.sabado}
                    onChange={handleChangeHorarioEstudoSabado}
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="horario-estudo-domingo-dialog"
                    label="Domingo"
                    value={horarioEstudo.domingo}
                    onChange={handleChangeHorarioEstudoDomingo}
                    fullWidth
                  />
                </>
              ) : (
                <></>
              )}
            </DialogContent>

            <DialogActions>
              <button
                className="btn-dialog-close"
                onClick={handleCloseHorarioEstudo}
              >
                Cancelar
              </button>
              <button
                className="btn-dialog-submit"
                onClick={() => {
                  salvarHorario();
                  resetHorarioEstudoData();
                  handleCloseHorarioEstudo();
                }}
              >
                Salvar
              </button>
            </DialogActions>
          </Dialog>
        ) : (
          ""
        )}
      </div>
    </ThemeProvider>
  );
}
