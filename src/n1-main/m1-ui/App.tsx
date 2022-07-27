import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import Pages from "./routes/pages";
import {HashRouter} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Pages/>
      </HashRouter>
    </div>
  );
}

export default App
