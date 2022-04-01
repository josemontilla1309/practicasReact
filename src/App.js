import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/header';
import itemListContainer from './components/itemListContainer.js';

function App() {
  return (
    <>
    <Navbar/>
    <itemListContainer greetins="Bienvenidos a la lista de productos"/>
    </>

  );
};

export default App;

