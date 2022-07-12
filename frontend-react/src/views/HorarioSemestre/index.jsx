import "./styles.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

export function HorarioSemestre() {
  const [turnoSelected , setIsTurnoSelected] = useState("")
  const [acaoSelected , setAcaoSelected] = useState("")
  const [semestreSelected , setSemestreSelected] = useState("")

  function handleChangeTurno(event) {
    setIsTurnoSelected(event.target.value); 
  };
  function handleChangeAcao(event) {
    setAcaoSelected(event.target.value); 
  };
  function handleChangeSemestre(event) {
    setSemestreSelected(event.target.value); 
  };
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
              value={turnoSelected}
              label="Turno"
              onChange={handleChangeTurno}
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
              value={acaoSelected}
              label="Ação"
              onChange={handleChangeAcao}
            >
              <MenuItem value={"Matutino"}>Visualizar</MenuItem>
              <MenuItem value={"Vespertino"}>Editar</MenuItem>
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

        <div className="horario-semestre-tabela-body">
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
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-terca">
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
              </div>
              <div className="horario-semestre-tabela-quarta">
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-quinta">
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-sexta">
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
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
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-terca">
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
              </div>
              <div className="horario-semestre-tabela-quarta">
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-quinta">
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-sexta">
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
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
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
                <div className="horario-semestre-tabela-segunda-body">
                  <span>seg</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-terca">
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
                <div className="horario-semestre-tabela-terca-body">
                  <span>ter</span>
                </div>
              </div>
              <div className="horario-semestre-tabela-quarta">
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
                <div className="horario-semestre-tabela-quarta-body">
                  <span>qua</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-quinta">
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
                <div className="horario-semestre-tabela-quinta-body">
                  <span>qui</span>
                </div>
              </div>

              <div className="horario-semestre-tabela-sexta">
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
                <div className="horario-semestre-tabela-sexta-body">
                  <span>sex</span>
                </div>
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
