import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import landScapeAnimes from './images/landScapeAnime.jpg'
import './App.css';
import { saveCards, getCards } from './LocalStorage/cartas';

if (!getCards('cartas')) {
  saveCards('cartas', []);
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cartas: [],
    };
  }

  componentDidMount() {
    this.setState({
      cartas: [...JSON.parse(localStorage.getItem('cartas'))]
    })
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      id,
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
      id,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState(({
        hasTrunfo: true,
      }));
    }

    this.setState((preventState) => ({
      id: preventState.id += 1,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cartas: [...preventState.cartas, objeto],
    }));

    this.setState(({
      isSaveButtonDisabled: true,
    }));

    const arrayInitialLocalStorage = JSON.parse(getCards('cartas'));
    const newArray = [...arrayInitialLocalStorage, objeto]
    saveCards('cartas', newArray)
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    }, () => this.button(valor));
  }

  button = (value) => {
    const { cardAttr1, cardAttr2, cardAttr3, cardDescription } = this.state;
    const noventa = 90;
    const cardAtt1 = Number(cardAttr1);
    const cardAtt2 = Number(cardAttr2);
    const cardAtt3 = Number(cardAttr3);
    const duz = 210;
    const zero = 0;
    if (value.length === 0) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } else if ((cardAtt1 > noventa) || (cardAttr1 < zero)) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } else if ((cardAtt2 > noventa) || (cardAtt2 < zero)) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } else if ((cardAtt3 > noventa) || (cardAtt3 < zero)) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } else if ((cardAtt1 + cardAtt2 + cardAtt3) > duz) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    return this.setState({
      isSaveButtonDisabled: false,
    });
  }

  handleDeleteCard = ({ target: { id } }) => {
    const cardsInScreen = JSON.parse(localStorage.getItem('cartas'))
    const arrayCards = [...cardsInScreen].filter((card) => Number(card.id) !== Number(id));
    localStorage.setItem('cartas', JSON.stringify(arrayCards))
    this.setState({
      cartas: [...JSON.parse(localStorage.getItem('cartas'))],
    })
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
      hasTrunfo,
      isSaveButtonDisabled,
      cartas,
    } = this.state;
    console.log(cardDescription.length)
    return (
      <div>
        <div className="TitleProject">
          <h1>Tryunfo</h1>
        </div>

        <div className="ContainerCardForm">
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

          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
          <div className="ContainerCardScreenStyle">
          { 
          
          cartas.map((carta, index) => (
              <div className="CardScreenStyle" key={ index }>
                <div>
                  <h2>{carta.cardName}</h2>
                </div>
                {
                  carta.cardImage ? (
                    <img src={ carta.cardImage } alt={ carta.cardName }/>
                  ) : (
                    <img src={ landScapeAnimes } />
                  )
                }
                <div>
                  <p>Description</p>
                </div>
                <div>
                  <div>
                    <p>{carta.cardDescription}</p>
                  </div>
                  <p>{carta.cardAttr1}</p>
                  <p>{carta.cardAttr2}</p>
                  <p>{carta.cardAttr3}</p>
                </div>
                <p>{carta.cardTrunfo}</p>
                <button
                  id={ carta.id }
                  onClick={ this.handleDeleteCard }
                >
                  Deletar Card
                </button>
              </div>
          ))
        }
          </div>
      </div>
    );
  }
}

export default App;
