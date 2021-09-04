import logo from "./logo.svg";
import "./App.css";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const handleLoginClick = () => {
    console.log("login is clicked");
    history.push("login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button" onClick={handleLoginClick}>
          Login
        </button>

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
