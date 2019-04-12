import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';
import About from './about/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/*
            App to po prostu komponent, oprócz definicji routingu może zawierać inne elementy
            elementy zdefiniwane tutaj pojawią się na każdej podstronie aplikacji
          */}
          <aside>
            <ul>
              <li>
                {/*
                  NavLink to specjalna wersja komponentu Link:
                  jeśli aktualna ścieżka pasuje z atrybutem "to"
                  to podświetl w sposób zdefiniowany przez "activeStyle"
                  (albo "activeClass")
                */}
                <NavLink to="/" exact activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>O stronie</NavLink>
              </li>
            </ul>
          </aside>

          {/* dopiero w tym miejscu pojawiają się różne komponenty w zależności od aktualnej ścieżki */}
          <Route exact path="/" component={Events} />
          <Route path="/details/:id" component={Details} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
