import logo from './logo.svg';
import './App.css';
import Frases from './components/Frases'
import FrasesDois from './components/FrasesDois'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo Luan Sá!
        </p>
        <Frases nome = "luan"  idade="27"/>
        {/* <FrasesDois /> */}
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
