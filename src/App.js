import './App.css';
import { observer } from 'mobx-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Residents from './pages/Residents';
import Person from './pages/Person';
import { Universe } from './models/universe';
import { ResidentsModel } from './models/residents';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const universe = Universe.create({ planets: [], selectedPlanet: "" });
  const residents = ResidentsModel.create({ residents: [], selectedPerson: "" });

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home universe={universe} />
        </Route>
        <Route path='/residents'>
          <Residents universe={universe} residents={residents} />
        </Route>
        <Route path='/person'>
          <Person universe={universe} residents={residents} />
        </Route>
      </Switch>
    </Router>
  );
}

export default observer(App);
