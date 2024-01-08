import React from 'react';
import './App.css';
import Select from "./components/select";
import {Option} from "./components";

function App() {
  return (
    <div className="App">
       <h1>React custom select</h1>
        <Select placeholder="Account">
            <Option value="account">account</Option>
            <Option value="wallet">wallet</Option>
            <Option value="bonuses">bonuses</Option>
            <Option value="bets">bets</Option>
            <Option value="history">history</Option>
        </Select>
    </div>
  );
}

export default App;
