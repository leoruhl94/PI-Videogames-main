import './App.css';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Home } from './components/Home/Home';
import { Landing } from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Landing/>
      <Home />
      <CreateGame/>
    </div>
  );
}

export default App;
