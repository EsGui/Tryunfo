import React from 'react';
import PropTypes from 'prop-types';
import landScapeAnimes from '../images/landScapeAnime.jpg'

function compara(card) {
  if (card) {
    return (
      <p data-testid="trunfo-card">Super Trunfo</p>
    );
  }
}

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="InfoFromScreenStyle">
        <div className="divCardName">
          <h1>{ cardName }</h1>
        </div>
        {
          cardImage ? (
            <img style={ { width: '100%', height: '400px' } } src={ cardImage } />
          ) : (
            <img style={ { width: '100%', height: '400px' } } src={ landScapeAnimes } />
          )
        }
        
        <div className="divTitleDescription">
          <h4>Description</h4>
        </div>
        <div className="divDescription">
          <p>{ cardDescription }</p>
        </div>
        <div className="Attributes">
          <p>atributo1: { cardAttr1 }</p>
          <p>atributo2: { cardAttr2 }</p>
          <p>atributo3: { cardAttr3 }</p>
          <p>{ cardRare }</p>
        </div>
        { compara(cardTrunfo) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
