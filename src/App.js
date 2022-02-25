import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.button = this.button.bind(this);

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
    };
  }

  onSaveButtonClick() {
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  onInputChange({ target }) {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    }, () => this.button(valor));
  }

  button(value) {
    const { cardAttr1, cardAttr2, cardAttr3, isSaveButtonDisabled } = this.state;
    const noventa = 90;
    const cardAtt1 = parseInt(cardAttr1, 10);
    const cardAtt2 = parseInt(cardAttr2, 10);
    const cardAtt3 = parseInt(cardAttr3, 10);
    const duz = 210;
    const zero = 0;
    const p = this.setState({
      isSaveButtonDisabled: true,
    });
    if (value.length === 0 && isSaveButtonDisabled === false) {
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
      </div>
    );
  }
}

export default App;
