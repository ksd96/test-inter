const actionsPlacesTypes = {
  CHANGE_CARDS: `CHANGE_CARDS`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  CHANGE_SORT: `CHANGE_SORT`
};

const actionsPlaces = {
  changeCards: (payload) => ({type: actionsPlacesTypes.CHANGE_CARDS, payload}),
  changeActiveCard: (payload) => ({type: actionsPlacesTypes.CHANGE_ACTIVE_CARD, payload}),
  changeSort: (payload) => ({type: actionsPlacesTypes.CHANGE_SORT, payload})
};

export { actionsPlaces, actionsPlacesTypes };
