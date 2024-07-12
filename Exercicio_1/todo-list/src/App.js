import './App.css';
import Todolist from './components/todo-list';

function App() {

  const tasks = [
    { id: 1, text: 'Aprender React' },
    { id: 2, text: 'Construir um projeto simples' },
    { id: 3, text: 'Entender Props e State' }
  ];

  return (
    <Todolist content={tasks} />
  );
}

export default App;
