import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/*
            zwróć uwagę na artybut "exact" - do rozpoznawania ścieżek
            wykorzystywany jest RegEx, dlatego jeśli adres w przeglądarce to "/"
            to spełniają go oba zdefiniwane tutaj routy...
            exact mówi: "ścieżka musi pasować dokładnie"
          */}
          <Route exact path="/" component={Events} />
          {/*
            część ścieżki poprzedzona ":" to parametr
            czyli dla np. komponent Details wyrenderuje się dla adresu
            "/details/17" i 17 będzie dostępne wewnątrz komponentu Details
          */}
          <Route path="/details/:id" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
