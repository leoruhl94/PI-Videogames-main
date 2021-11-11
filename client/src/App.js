import "./App.css";
import { AddGame } from "./containers/AddGame/AddGame";
import { Home } from "./containers/Home/Home";
import { Landing } from "./containers/Landing/Landing";
import { Route, Switch } from "react-router-dom";
import { GameDetail } from "./containers/GameDetail/GameDetail";
import { Redirect404 } from "./containers/Redirect404/Redirect404";
import { Favorites } from "./containers/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/myGames" exact>
          <Favorites />
        </Route>
        <Route path="/addGame" exact>
          <AddGame />
        </Route>
        <Route path="/detail/:id" exact>
          <GameDetail />
        </Route>
        <Route path="*" exact>
          <Redirect404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
