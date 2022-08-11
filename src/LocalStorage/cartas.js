const saveCards = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}

const getCards = (key) => {
  return localStorage.getItem(key);
}

module.exports = {
  saveCards,
  getCards
};