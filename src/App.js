import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';
import About from './about/About';
import Login from './login/Login';

import events from './data/events.json';
import { fakeAuth } from './fakeAuth';

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

          <Route exact path="/" render={(props) => <Events {...props} events={events} />} />
          <Route path="/details/:id" render={(props) => <Details {...props} events={events} />} />
          <Route path="/login" component={Login}/>
          <Route path="/about" render={(props) => {
            // wykorzystując atrybut "render" możemy dla danej ścieżki wyrenderować
            // inne komponenty w zależności od jakiegoś warunku, tutaj:
            // jeśli użytkownik jest już zalogowany, wyrenderuj komponent About
            if (fakeAuth.isAuthenticated) {
              return <About {...props} />
            }

            // w przeciwnym razie wyrenderuj komponent Redirect - to taki specjalny
            // komponent dostarczany przez react-router, pozwala na wykonanie przekierowania
            // (w tym przypadku przekierowujemy na ścieżkę /login)
            return (
              <Redirect to="/login" />
            );
          }} />
        </div>
      </Router>
    );
  }
}

export default App;
