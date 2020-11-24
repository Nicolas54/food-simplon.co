import logo from './logo.svg';
import './App.css';
import Menu from './component/menu'
import MenuSemaine from './component/menuSemaine'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MenuSemaine />
      </header>
    </div>
  );
}

export default App;
