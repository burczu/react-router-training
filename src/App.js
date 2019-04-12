import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';
import About from './about/About';

import events from './data/events.json';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <aside>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
              </li>
            </ul>
          </aside>

          {/*
            jeśli chcemy przekazać jakieś propsy do komponentów renderowanych dla danej ścieżki
            albo chcemy renderować inne komponenty w zależności od jakiegoś warunku
            możemy skorzystać z atrybutu "render" (a nie "component"), która przyjmuje funkcję
            zwracającą komponent
            ---
            zwróć uwagę, że funkcja przypisana do atrybutu "render" przyjmuje jako parametr obiekt
            "props" - są to propsy dodawane przez react-router (choćby te dotyczące parametrów)
            dlatego koniecznie przekaż je wszystkie do zwracanego komponentu
            (najłątwiej używając spread operatora)
          */}
          <Route exact path="/" render={(props) => <Events {...props} events={events} />} />
          <Route path="/details/:id" render={(props) => <Details {...props} events={events} />} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
