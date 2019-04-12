import React from 'react';
import events from '../data/events.json';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {} };
  }

  componentDidMount() {
    // jak dostać się do parametrów dostępnych w adresie?
    // są one dostępne w this.props.match.params
    // (react-router dodaje odpowiednie obiekty do propsów)
    const id = this.props.match.params.id;

    // pamiętaj, że parametr wyciągnięty z adresu jest stringiem!
    // tutaj trzeba go jeszcze sparsować na int w celu porównania
    const event = events.find(item => item.id === parseInt(id, 10));

    this.setState({
      event
    });
  }

  render() {
    const { name, place, date, time } = this.state.event;

    return (
      <div>
        <strong>Nazwa:</strong> {name}<br />
        <strong>Miejsce:</strong> {place}<br />
        <strong>Data:</strong> {date}<br />
        <strong>Godzina:</strong> {time}
      </div>
    );
  }
}

export default Details;
