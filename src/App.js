import React from "react";
import logo from "./logo.svg";
import { PrivacyScreen } from "@capacitor-community/privacy-screen";
import "./App.css";

function App() {
  const enable = async () => {
    await PrivacyScreen.enable();
  };

  React.useEffect(() => {
    enable();
  }, []);

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
      </header>
    </div>
  );
}

export default App;
