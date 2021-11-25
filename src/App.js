
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Mainpage from "./pages/mainpage/mainpage"
import Header from "./pages/header/header"
import Sidebar from './pages/sidebar/sidebar';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const [flag_sidebar, set_sidebar] = useState(false);
  const [ctheme, setTheme] = useState(true);
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      width: "100%",
      background: "#FCFCFC",
    },
  };


  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Header flag_sidebar={flag_sidebar} set_sidebar={set_sidebar} ctheme={ctheme}></Header>
        <div style={styles.contentDiv} >
          <div className="sidebar1" style={{ display: "none" }} >
            <Sidebar flag_sidebar={1} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div>
          <div className="sidebar2">
            <Sidebar flag_sidebar={flag_sidebar} ctheme={ctheme} setTheme={setTheme}></Sidebar>
          </div>
          <Mainpage></Mainpage>
        </div>
      </Web3ReactProvider>
    </>
  );
}

export default App;
