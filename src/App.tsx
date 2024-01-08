import Select from "./components/select";
import {Option} from "./components";
import arrow from '../src/img/menu_arrow.svg';
import './App.css'

function App() {
  return (
    <div className="App">
       <h1>React custom select</h1>
        <Select placeholder="Account">
            <Option value="account">
                <div className="option-block">
                    <span>account</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </Option>
            <Option value="wallet">
                <div className="option-block">
                    <span>wallet</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </Option>
            <Option value="bonuses">
                <div className="option-block">
                    <span>bonuses</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </Option>
            <Option value="bets">
                <div className="option-block">
                    <span>bets</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </Option>
            <Option value="history">
                <div className="option-block">
                    <span>history</span>
                    <img src={arrow} alt="arrow"/>
                </div>
            </Option>
        </Select>
    </div>
  );
}

export default App;
