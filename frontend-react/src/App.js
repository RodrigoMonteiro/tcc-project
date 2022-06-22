import { useState } from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import GlobalStyle from "./theme/global";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import {  Views} from "./views";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <div className="App-container">
        <Header isLight={isLightTheme} changeTheme={toggleTheme}></Header>
        <Navbar></Navbar>
        <Views></Views>
        <GlobalStyle></GlobalStyle>
      </div>
    </ThemeProvider>
  );
}

export default App;
