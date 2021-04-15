import { actionsPlacesTypes } from "../actions/actionsPlaces";
import initialStates from "../initialStates/initialStates";

const reducerCards= (state = initialStates.places, action) => {
  switch(action.type) {
    case actionsPlacesTypes.CHANGE_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case actionsPlacesTypes.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case actionsPlacesTypes.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      }
    default:
      return state;
  };
};

export default reducerCards;
