import logo from './logo.svg';
import './App.css';
import MainRoute from './pages/MainRoute';
import { Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
     <MainRoute/>
     <Button>Hello World</Button>
    </div>
  );
}

export default App;
