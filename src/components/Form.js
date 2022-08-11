import React from 'react';
import PropTypes from 'prop-types';
import landScapeAnimes from '../images/landScapeAnime.jpg'

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const check = (response) => {
      if (!response) {
        return (
          <label className="ButtonCheckStyle"htmlFor="check">
            <p>check</p>
            <input
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
        );
      }
      return (
        <p>Você já tem um Super Trunfo em seu baralho</p>
      );
    };

    return (
      <form className="FormsTryunfoStyle">
        <label htmlFor="titulo">
          <p>titulo</p>
          <input
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          <p>descricao</p>
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="atributo1">
          <p>atributo1</p>
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="atributo2">
          <p>atributo2</p>
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="atributo3">
          <p>atributo3</p>
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          <p>image</p>
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="seleciona">
          <p>seleciona</p>
          <select
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {check(hasTrunfo)}
        <button
          name="desativa"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
