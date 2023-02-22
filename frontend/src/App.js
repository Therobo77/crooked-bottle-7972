import logo from './logo.svg';
import './App.css';
import MainRoute from './pages/MainRoute';
import { Button } from '@chakra-ui/react';
import MobilePage from './pages/Mobile/MobilePage';


function App() {
  return (
    <div className="App">
     <MainRoute/>
     {/* <MobilePage/> */}
    
    </div>
  );
}

export default App;
