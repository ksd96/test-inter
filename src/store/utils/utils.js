const changeStorage = (cards) => {
  const cardsStore = JSON.stringify(cards);
  localStorage.setItem("cards", cardsStore);
};

export { changeStorage };
