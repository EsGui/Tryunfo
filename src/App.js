import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cartas: [],
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const objeto = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((preventState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: true,
      isSaveButtonDisabled: true,
      cartas: [...preventState.cartas, objeto],
    }));
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    }, () => this.button(valor));
  }

  button = (value) => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const noventa = 90;
    const cardAtt1 = parseInt(cardAttr1, 10);
    const cardAtt2 = parseInt(cardAttr2, 10);
    const cardAtt3 = parseInt(cardAttr3, 10);
    const duz = 210;
    const zero = 0;
    const p = this.setState({
      isSaveButtonDisabled: true,
    });
    if (value.length === 0) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else if ((cardAtt1 > noventa) || (cardAttr1 < zero)) {
      return p;
    } else if ((cardAtt2 > noventa) || (cardAtt2 < zero)) {
      return p;
    } else if ((cardAtt3 > noventa) || (cardAtt3 < zero)) {
      return p;
    } else if ((cardAtt1 + cardAtt2 + cardAtt3) > duz) {
      return p;
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      cartas,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {

          cartas.map((carta, index) => (
            <div key={ index }>
              {carta.cardName}
              {carta.cardDescription}
            </div>
          ))

        }
      </div>
    );
  }
}

export default App;
