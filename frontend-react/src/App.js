import { useContext, useState } from "react";
import "./App.css";
import { GlobalContext } from "./providers/globalProps";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import GlobalStyle from "./theme/global";

import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HomeNewAccount } from "./views/Home/HomeNewAccount";
import { Views } from "./views";
import { Home } from "./views/Home";

function App() {
  
  const { globalProps } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={globalProps.isLightTheme ? lightTheme : darkTheme}>
        <div className="App-container">
          {globalProps.isLogged && globalProps.hasAccount ? (
            <>
              <Header></Header>
              <Navbar></Navbar>
              <Views></Views>
            </>
          ) : !globalProps.isLogged && globalProps.hasAccount ? (
            <Home></Home>
          ) : (
            <HomeNewAccount></HomeNewAccount>
          )}

          <GlobalStyle></GlobalStyle>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
