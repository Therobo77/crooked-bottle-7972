import "./App.css";
import MainRoute from "./pages/MainRoute";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Navbar />
      <MainRoute />
      <Footer/>

    </div>
  );
}

export default App;
