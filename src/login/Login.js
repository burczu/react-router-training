import React from 'react';
import { Redirect } from 'react-router-dom';
import { fakeAuth } from '../fakeAuth';

class Login extends React.Component {
  state = { redirectToAbout: false };

  constructor(props) {
    super(props);

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(event) {
    event.preventDefault();

    // fakeowa autentykacja, a następnie zmiana stanu mówiąca o tym,
    // czy można już przekierować na stronę About
    // ---
    // w tym miejscu powinna być oczywiście użyta prawdziwa autentykacja
    // z użyciem API itp.
    fakeAuth.authenticate(
      () => this.setState({ redirectToAbout: true })
    );
  }

  render() {
    const { redirectToAbout } = this.state;

    // w zależności od stanu komponentu
    // przekieruj na ścieżkę /about
    if (redirectToAbout) {
      return <Redirect to="/about" />;
    }

    // albo wyrenderuj formularz logowania
    return (
      <>
        <p>Nie jesteś zalogowany!</p>
        <form onSubmit={this.onLoginSubmit}>
          <button type="submit">Zaloguj</button>
        </form>
      </>
    );
  }
}

export default Login;
