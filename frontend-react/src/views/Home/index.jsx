import "./styles.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../../providers/globalProps";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";

import { ThemeProvider, createTheme } from "@mui/material/styles";

export function Home() {
  const { globalProps, setGlobalProps } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [visibilidadeSenha, setVisibilidadeSenha] = useState(false);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "'Oswald' , 'sans-serif'",
      },
    },
  });

  function toggleVisibilidadeSenha() {
    setVisibilidadeSenha(!visibilidadeSenha);
  }

  function login() {
    setGlobalProps({
      ...globalProps,
      isLogged: true,
    });
  }

  function createNewAccountPage() {
    setGlobalProps({
      ...globalProps,
      hasAccount: !globalProps.hasAccount,
    });
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangeSenha(event) {
    setSenha(event.target.value);
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="home-container">
        <div className="home-form-container">
          <div className="home-form-header">
            <img  style={{width: "32%", height: "58%"}}src="assets/logo.png" alt="Logo over here" />
            <h2>Otimize seu tempo</h2>
          </div>
          <div className="home-form-body">
            <Box component="form" sx={{ width: "100%" }}>
              <TextField
                id="email-field"
                label="Email"
                variant="filled"
                value={email}
                onChange={handleChangeEmail}
                fullWidth
              />
            </Box>

            <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="senha-field"
                type={visibilidadeSenha ? "text" : "password"}
                value={senha}
                onChange={handleChangeSenha}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle senha visibility"
                      onClick={toggleVisibilidadeSenha}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {visibilidadeSenha ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
              <button className="home-form-body-btn" onClick={login}>
            <Link to="inicio" style={{ textDecoration: 'none', color: 'white'}}>
                Entrar
            </Link>
              </button>
            <span className="cadastrar">
              Não possui conta? Se cadastre{" "}
              <span
                onClick={createNewAccountPage}
                style={{ cursor: "pointer" }}
              >
                <strong>aqui</strong>
              </span>
            </span>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
