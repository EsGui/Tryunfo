import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="titulo">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="atributo1">
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atributo2">
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atributo3">
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="seleciona">
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Form;
