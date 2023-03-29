import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TableData from './components/TableData';

function App() {
  return (
    <div className="App">
    <NavBar />
    <p className='display-5 text-primary mt-5'>CRUD OPERATION</p>
    <TableData />
    </div>
  );
}

export default App;
