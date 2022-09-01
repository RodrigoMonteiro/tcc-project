import "./styles.css";
import { GlobalContext } from "../../../providers/globalProps";
import { useContext, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function HomeNewAccount() {
  const { globalProps, setGlobalProps } = useContext(GlobalContext);

  const [newEmail, setNewEmail] = useState("");
  const [newSenha, setNewSenha] = useState("");
  const [newSenhaRepetir, setNewSenhaRepetir] = useState("");
  const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
  const [mostrarNovaSenhaRepetir, setMostrarNovaSenhaRepetir] = useState(false);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });
  function toggleMudarVisibilidadeNovaSenha() {
    setMostrarNovaSenha(!mostrarNovaSenha);
  }
  function toggleMudarVisibilidadeNovaSenhaRepetir() {
    setMostrarNovaSenhaRepetir(!mostrarNovaSenhaRepetir);
  }

  function handleChangeMudarNovaSenha(event) {
    setNewSenha(event.target.value);
  }
  function handleChangeMudarNovaSenhaRepetir(event) {
    setNewSenhaRepetir(event.target.value);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  function handleChangeNewEmail(event) {
    setNewEmail(event.target.value);
  }

  function createNewAccount() {
    setGlobalProps({
      ...globalProps,
      hasAccount: true,
    });
  }
  function loginPage() {
    setGlobalProps({
      ...globalProps,
      hasAccount: true,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="home-container-new-account">
        <div className="home-form-container-new-account">
          <div className="home-form-header-new-account">
            <img
              style={{ width: "22%", height: "78%", marginTop: "7px" }}
              src="assets/logo.png"
              alt="Logo over here"
            />
            <h2 style={{ color: "#0f4a8d" }}>Otimize seu tempo</h2>
          </div>
          <div className="home-form-body-new-account">
            <Box component="form" sx={{ width: "100%", mb: 2, mt: 2 }}>
              <TextField
                id="new-email-field"
                label="Email"
                variant="filled"
                value={newEmail}
                onChange={handleChangeNewEmail}
                fullWidth
              />
            </Box>

            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="new-senha-field"
                type={mostrarNovaSenha ? "text" : "password"}
                value={newSenha}
                onChange={handleChangeMudarNovaSenha}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle senha visibility"
                      onClick={toggleMudarVisibilidadeNovaSenha}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {mostrarNovaSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl sx={{ mt: 3, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Repetir senha
              </InputLabel>
              <OutlinedInput
                id="new-senha-repetir-field"
                type={mostrarNovaSenhaRepetir ? "text" : "password"}
                value={newSenhaRepetir}
                onChange={handleChangeMudarNovaSenhaRepetir}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle senha visibility"
                      onClick={toggleMudarVisibilidadeNovaSenhaRepetir}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {mostrarNovaSenhaRepetir ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <button
              className="home-form-body-btn-create-account"
              onClick={createNewAccount}
            >
              Criar conta
            </button>
            <span className="home-span-create-account">
              Já possui conta? Realize o login{" "}
              <span onClick={loginPage} style={{ cursor: "pointer" }}>
                <strong>aqui</strong>
              </span>
            </span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
