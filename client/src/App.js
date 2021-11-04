import './App.css';
import { CreateGame } from './containers/CreateGame/CreateGame';
import { Home } from './containers/Home/Home';
import { Landing } from './containers/Landing/Landing';
import { Route, Switch } from 'react-router-dom';
import { GameDetail } from './containers/GameDetail/GameDetail';
import { Header } from './components/Header/Header';
//require('dotenv').config();


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact> <Landing/> </Route>
        <Route path="/home" > <Header/> <Home/> </Route>
        <Route path="/create" exact> <CreateGame/> </Route>
        <Route path="/detail/:id" exact> <Header/> <GameDetail/> </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
