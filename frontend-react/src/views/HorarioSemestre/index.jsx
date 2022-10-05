import "./styles.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState, useContext } from "react";
import {
  horarioSemestreMatutino,
  horarioSemestreVespertino,
  horarioSemestreNoturno,
} from "../../providers/dataTest/horarioSemestre";
import { GlobalContext } from "../../providers/globalProps";

export function HorarioSemestre() {

  const [turnoSelected, setIsTurnoSelected] = useState("Matutino");
  const [acaoSelected, setAcaoSelected] = useState("Visualizar");
  const [semestreSelected, setSemestreSelected] = useState("2021.1");

  const [horarioSemestreMatutinoList, setHorarioSemestreMatutinoList] =
    useState(horarioSemestreMatutino);
  const [horarioSemestreVespertinoList, setHorarioSemestreVespertinoList] =
    useState(horarioSemestreVespertino);
  const [horarioSemestreNoturnoList, setHorarioSemestreNoturnoList] = useState(
    horarioSemestreNoturno
  )
 const { globalProps } = useContext(GlobalContext);
  

  function handleChangeTurno(event) {
    setIsTurnoSelected(event.target.value);
  }
  function handleChangeAcao(event) {
    setAcaoSelected(event.target.value);
  }
  function handleChangeSemestre(event) {
    setSemestreSelected(event.target.value);
  }
  
  return (
   
      <div className="horario-semestre-container">
        <div className="horario-semestre-options-contanier">
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Semestre</InputLabel>
              <Select
               
                labelId="demo-select-small"
                id="demo-select-small"
                value={semestreSelected}
                label="Semestre"
                onChange={handleChangeSemestre}
                defaultValue="2021.1"
              >
                <MenuItem  value={"2021.1"}>
                  2021.1
                </MenuItem>
                <MenuItem  value={"2021.2"}>
                  2021.2
                </MenuItem>
                <MenuItem  value={"2022.1"}>
                  2022.1
                </MenuItem>
                <MenuItem  value={"2022.2"}>
                  2022.2
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 180 }}>
            <FormControl fullWidth sx={{}}>
              <InputLabel id="demo-select-small">Turno</InputLabel>
              <Select
                sx={{
                  color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
                }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={turnoSelected}
                label="Turno"
                onChange={handleChangeTurno}
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
                sx={{
                  color: globalProps.isLightTheme ? "#191919" : "#c4c4c4",
                }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={acaoSelected}
                label="Ação"
                onChange={handleChangeAcao}
                defaultValue="Visualizar"
              >
                <MenuItem value={"Visualizar"}>Visualizar</MenuItem>
                <MenuItem value={"Editar"}>Editar</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="horario-semestre-tabela-container">
          <div className="horario-semestre-tabela-header-container">
            <div className="horario-semestre-tabela-header-horario">
              <span>Horários</span>
            </div>
            <div className="horario-semestre-tabela-header-segunda">
              <span>Segunda-feira</span>
            </div>
            <div className="horario-semestre-tabela-header-terca">
              <span>Terça-feira</span>
            </div>
            <div className="horario-semestre-tabela-header-quarta">
              <span>Quarta-feira</span>
            </div>
            <div className="horario-semestre-tabela-header-quinta">
              <span>Quinta-feira</span>
            </div>
            <div className="horario-semestre-tabela-header-sexta">
              <span>Sexta-feira</span>
            </div>
          </div>

          <div
            className={`horario-semestre-tabela-body ${
              acaoSelected === "Visualizar" ? "visualizar-mode" : ""
            }`}
          >
            {turnoSelected === "Matutino" ? (
              <>
                <div className="horario-semestre-tabela-horario">
                  <div className="horario-semestre-tabela-horario-body">
                    <span>06:00 - 07:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>07:00 - 08:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>08:00 - 09:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>09:00 - 10:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>10:00 - 11:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>11:00 - 12:00</span>
                  </div>
                </div>

                <div className="horario-semestre-tabela-segunda">
                  {Object.values(horarioSemestreMatutinoList.segunda).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-segunda-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreMatutinoList.segunda
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreMatutinoList({
                                ...horarioSemestreMatutinoList,

                                [Object.keys(horarioSemestreMatutinoList)[0]]: {
                                  ...Object.values(
                                    horarioSemestreMatutinoList
                                  )[0],
                                  [Object.keys(
                                    horarioSemestreMatutinoList.segunda
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-terca">
                  {Object.values(horarioSemestreMatutinoList.terca).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-terca-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreMatutinoList.terca)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreMatutinoList({
                                ...horarioSemestreMatutinoList,

                                [Object.keys(horarioSemestreMatutinoList)[1]]: {
                                  ...Object.values(
                                    horarioSemestreMatutinoList
                                  )[1],
                                  [Object.keys(
                                    horarioSemestreMatutinoList.terca
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="horario-semestre-tabela-quarta">
                  {Object.values(horarioSemestreMatutinoList.quarta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quarta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreMatutinoList.quarta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreMatutinoList({
                                ...horarioSemestreMatutinoList,

                                [Object.keys(horarioSemestreMatutinoList)[2]]: {
                                  ...Object.values(
                                    horarioSemestreMatutinoList
                                  )[2],
                                  [Object.keys(
                                    horarioSemestreMatutinoList.quarta
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-quinta">
                  {Object.values(horarioSemestreMatutinoList.quinta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quinta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreMatutinoList.quinta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreMatutinoList({
                                ...horarioSemestreMatutinoList,

                                [Object.keys(horarioSemestreMatutinoList)[3]]: {
                                  ...Object.values(
                                    horarioSemestreMatutinoList
                                  )[3],
                                  [Object.keys(
                                    horarioSemestreMatutinoList.quinta
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-sexta">
                  {Object.values(horarioSemestreMatutinoList.sexta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-sexta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreMatutinoList.sexta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreMatutinoList({
                                ...horarioSemestreMatutinoList,

                                [Object.keys(horarioSemestreMatutinoList)[4]]: {
                                  ...Object.values(
                                    horarioSemestreMatutinoList
                                  )[4],
                                  [Object.keys(
                                    horarioSemestreMatutinoList.sexta
                                  )[index]]: event.target.value,
                                },
                              });

                              console.log(horarioSemestreMatutinoList);
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            ) : turnoSelected === "Vespertino" ? (
              <>
                <div className="horario-semestre-tabela-horario">
                  <div className="horario-semestre-tabela-horario-body">
                    <span>12:00 - 13:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>13:00 - 14:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>14:00 - 15:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>15:00 - 16:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>16:00 - 17:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>17:00 - 18:00</span>
                  </div>
                </div>

                <div className="horario-semestre-tabela-segunda">
                  {Object.values(horarioSemestreVespertinoList.segunda).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-segunda-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreVespertinoList.segunda
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreVespertinoList({
                                ...horarioSemestreVespertinoList,

                                [Object.keys(horarioSemestreVespertinoList)[0]]:
                                  {
                                    ...Object.values(
                                      horarioSemestreVespertinoList
                                    )[0],
                                    [Object.keys(
                                      horarioSemestreVespertinoList.segunda
                                    )[index]]: event.target.value,
                                  },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-terca">
                  {Object.values(horarioSemestreVespertinoList.terca).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-terca-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreVespertinoList.terca
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreVespertinoList({
                                ...horarioSemestreVespertinoList,

                                [Object.keys(horarioSemestreVespertinoList)[1]]:
                                  {
                                    ...Object.values(
                                      horarioSemestreVespertinoList
                                    )[1],
                                    [Object.keys(
                                      horarioSemestreVespertinoList.terca
                                    )[index]]: event.target.value,
                                  },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="horario-semestre-tabela-quarta">
                  {Object.values(horarioSemestreVespertinoList.quarta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quarta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreVespertinoList.quarta
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreVespertinoList({
                                ...horarioSemestreVespertinoList,

                                [Object.keys(horarioSemestreVespertinoList)[2]]:
                                  {
                                    ...Object.values(
                                      horarioSemestreVespertinoList
                                    )[2],
                                    [Object.keys(
                                      horarioSemestreVespertinoList.quarta
                                    )[index]]: event.target.value,
                                  },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-quinta">
                  {Object.values(horarioSemestreVespertinoList.quinta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quinta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreVespertinoList.quinta
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreVespertinoList({
                                ...horarioSemestreVespertinoList,

                                [Object.keys(horarioSemestreVespertinoList)[3]]:
                                  {
                                    ...Object.values(
                                      horarioSemestreVespertinoList
                                    )[3],
                                    [Object.keys(
                                      horarioSemestreVespertinoList.quinta
                                    )[index]]: event.target.value,
                                  },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-sexta">
                  {Object.values(horarioSemestreVespertinoList.sexta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-sexta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(
                                horarioSemestreVespertinoList.sexta
                              )[index]
                            }
                            onChange={(event) => {
                              setHorarioSemestreVespertinoList({
                                ...horarioSemestreVespertinoList,

                                [Object.keys(horarioSemestreVespertinoList)[4]]:
                                  {
                                    ...Object.values(
                                      horarioSemestreVespertinoList
                                    )[4],
                                    [Object.keys(
                                      horarioSemestreVespertinoList.sexta
                                    )[index]]: event.target.value,
                                  },
                              });
                              console.log(horarioSemestreVespertinoList);
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            ) : turnoSelected === "Noturno" ? (
              <>
                <div className="horario-semestre-tabela-horario">
                  <div className="horario-semestre-tabela-horario-body">
                    <span>18:00 - 19:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>19:00 - 20:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>20:00 - 21:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>21:00 - 22:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>22:00 - 23:00</span>
                  </div>
                  <div className="horario-semestre-tabela-horario-body">
                    <span>23:00 - 00:00</span>
                  </div>
                </div>

                <div className="horario-semestre-tabela-segunda">
                  {Object.values(horarioSemestreNoturnoList.segunda).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-segunda-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreNoturnoList.segunda)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreNoturnoList({
                                ...horarioSemestreNoturnoList,

                                [Object.keys(horarioSemestreNoturnoList)[0]]: {
                                  ...Object.values(
                                    horarioSemestreNoturnoList
                                  )[0],
                                  [Object.keys(
                                    horarioSemestreNoturnoList.segunda
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-terca">
                  {Object.values(horarioSemestreNoturnoList.terca).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-segunda-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreNoturnoList.terca)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreNoturnoList({
                                ...horarioSemestreNoturnoList,

                                [Object.keys(horarioSemestreNoturnoList)[1]]: {
                                  ...Object.values(
                                    horarioSemestreNoturnoList
                                  )[1],
                                  [Object.keys(
                                    horarioSemestreNoturnoList.terca
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="horario-semestre-tabela-quarta">
                  {Object.values(horarioSemestreNoturnoList.quarta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quarta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreNoturnoList.quarta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreNoturnoList({
                                ...horarioSemestreNoturnoList,

                                [Object.keys(horarioSemestreNoturnoList)[2]]: {
                                  ...Object.values(
                                    horarioSemestreNoturnoList
                                  )[2],
                                  [Object.keys(
                                    horarioSemestreNoturnoList.quarta
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-quinta">
                  {Object.values(horarioSemestreNoturnoList.quinta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-quinta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreNoturnoList.quinta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreNoturnoList({
                                ...horarioSemestreNoturnoList,

                                [Object.keys(horarioSemestreNoturnoList)[3]]: {
                                  ...Object.values(
                                    horarioSemestreNoturnoList
                                  )[3],
                                  [Object.keys(
                                    horarioSemestreNoturnoList.quinta
                                  )[index]]: event.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="horario-semestre-tabela-sexta">
                  {Object.values(horarioSemestreNoturnoList.sexta).map(
                    (e, index) => {
                      return (
                        <div className="horario-semestre-tabela-sexta-body">
                          <input
                            className="horario-semestre-field"
                            type="text"
                            placeholder={e}
                            value={
                              Object.values(horarioSemestreNoturnoList.sexta)[
                                index
                              ]
                            }
                            onChange={(event) => {
                              setHorarioSemestreNoturnoList({
                                ...horarioSemestreNoturnoList,

                                [Object.keys(horarioSemestreNoturnoList)[4]]: {
                                  ...Object.values(
                                    horarioSemestreNoturnoList
                                  )[4],
                                  [Object.keys(
                                    horarioSemestreNoturnoList.sexta
                                  )[index]]: event.target.value,
                                },
                              });
                              console.log(horarioSemestreNoturnoList);
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
   
  );
}
