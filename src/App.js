import logo from './logo.svg';
import './App.css';
import Zain from './components/Zain';
import CreateNewRepo from './components/CreateNewRepo';
import Clone from './components/Clone';
import Pull from './components/Pull ';

function App() {
  return (
    <div className="App">
     <Zain/>
     <CreateNewRepo/>
     <Clone/>
     <Pull/>
    </div>
  );
}

export default App;
