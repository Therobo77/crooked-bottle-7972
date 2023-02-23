import logo from "./logo.svg";
import "./App.css";
import MainRoute from "./pages/MainRoute";
import Username from "./login/Username";

function App() {
  return (
    <div className="App">
      <MainRoute />
      <Username />
    </div>
  );
}

export default App;
