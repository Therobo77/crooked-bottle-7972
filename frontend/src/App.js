import "./App.css";
import MainRoute from "./pages/MainRoute";
import Username from "./login/Username";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <MainRoute />
      {/* <Username /> */}
      <Footer/>
    </div>
  );
}

export default App;
