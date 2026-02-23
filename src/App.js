import logo from './logo.svg';
import './App.css';
import Zain from './components/Zain';
import CreateNewRepo from './components/CreateNewRepo';
import Clone from './components/Clone';
import Pull from './components/Pull ';
import Maqbool from './components/Maqbool';

function App() {
  return (
    <div className="App">
     <Zain/>
     <CreateNewRepo/>
     <Clone/>
     <Pull/>
     <Maqbool/>
    </div>
  );
}

export default App;
