import './App.css';
import { AddGame } from './containers/AddGame/AddGame';
import { Home } from './containers/Home/Home';
import { Landing } from './containers/Landing/Landing';
import { Route, Switch } from 'react-router-dom';
import { GameDetail } from './containers/GameDetail/GameDetail';
//require('dotenv').config();


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact> <Landing/> </Route>
        <Route path="/home" > <Home/> </Route>
        <Route path="/addGame" exact> <AddGame/> </Route>
        <Route path="/detail/:id" exact> <GameDetail/> </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
