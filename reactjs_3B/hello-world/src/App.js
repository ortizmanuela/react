import './App.css';
import Saudacao from './componentes/Saudacao';

function App() {
  let name = "testando";

  return (
    <div className="App">
      <Saudacao name={name}/>
    </div>
  );
}

export default App;
