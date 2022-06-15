import logo from './logo.svg';
import './App.css';
import Dropdown from './Dropdown/index'
import Todo from './TodoList/index'


const car = [
  {
    carName: 'car1',
    carModal: "2000",
    mfg: 'india'
  },
  {
    carName: 'car2',
    carModal: "2000",
    mfg: 'india1'
  },
  {
    carName: 'car3',
    carModal: "2000",
    mfg: 'india2'
  },
  {
    carName: 'car4',
    carModal: "2000",
    mfg: 'india3    '
  },
]
function App() {
  return (
    <div className="App">
      <Todo />
      {/* <Dropdown data={car} /> */}
      {/* <Dropdown data={car} /> */}
    </div>
  );
}

export default App;
