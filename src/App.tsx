import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import { ThemeToggler } from "./components/ThemeToggler";
import { Counter } from "./components/Counter";

const App = () => (
  <main>
    <Counter />
    <ThemeToggler />
  </main>
);

export default App;
