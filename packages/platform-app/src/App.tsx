import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ExampleComponent from "ui";

export type Props = { name: string };

const App: React.FC<Props> = ({ name }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExampleComponent text={`It worked in ${name}!`} />
      </header>
    </div>
  );
};

export default App;
