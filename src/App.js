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

          <Route exact path="/" component={Events} />
          <Route path="/details/:id" component={Details} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
