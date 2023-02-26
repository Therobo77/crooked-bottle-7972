import "./App.css";
import MainRoute from "./pages/MainRoute";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Header from "./components/LandingPage/Header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />

      <MainRoute />
      <Footer/>

    </div>
  );
}

export default App;
