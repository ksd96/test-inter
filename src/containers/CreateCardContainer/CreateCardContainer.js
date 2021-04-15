import CreateCard from "../../components/CreateCard/CreateCard";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { useHistory } from 'react-router-dom';
import { actionsPlaces } from "../../store/actions/actionsPlaces";
import { changeStorage } from "../../store/utils/utils";

const CreateCardContainer = () => {
  const store = useSelector((store) => store.cards);
  const dispatch = useDispatch();
  const history = useHistory();

  const createCardHandler = useCallback((data) => {
    const newCards = store.cards;
    newCards[data.date] = data;
    changeStorage(newCards);
    dispatch(actionsPlaces.changeCards(newCards));
    history.push("/test-inter");
  }, [store.cards, dispatch, history]);

  return (
    <CreateCard onCreateCard={createCardHandler} />
  )
};

export default CreateCardContainer;
