import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Events from './events/Events';

class App extends React.Component {
  render() {
    return (
      <Router> {/* cała aplikacja "owinięta" w Router */}
        <div className="container">
          {/*
            definicja Route - jeśli adres to "/" to w tym
            miejscu wyrenderuj komponent Events
          */}
          <Route exact path="/" component={Events} />
        </div>
      </Router>
    );
  }
}

export default App;
