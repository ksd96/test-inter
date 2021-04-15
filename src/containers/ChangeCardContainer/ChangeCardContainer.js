import ChangeCard from "../../components/ChangeCard/ChangeCard";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { actionsPlaces } from "../../store/actions/actionsPlaces";
import { changeStorage } from "../../store/utils/utils";

const ChangeCardContainer = () => {
  const store = useSelector((store) => store.cards);
  const dispatch = useDispatch();
  const history = useHistory();
  const card = store.cards[store.activeCard];

  useEffect(() => {
    const messageWarning = () => {
      alert("Если вы покуните страницу, изменения не сохранятся");
    };
    window.addEventListener("popstate", messageWarning)
    return () => {window.removeEventListener("popstate", messageWarning)};
  }, []);

  const changeInfoCardHandler = useCallback((data) => {
    const newCards = store.cards;
    newCards[store.activeCard] = data;
    changeStorage(newCards);
    dispatch(actionsPlaces.changeCards(newCards));
    history.push("/");
  }, [store.cards, dispatch, history, store.activeCard]);

  const deleteCardHandler = useCallback(() => {
    const newCards = store.cards;
    delete newCards[store.activeCard];
    changeStorage(newCards);
    dispatch(actionsPlaces.changeCards(newCards));
    history.push("/");
  }, [store.cards, dispatch, history, store.activeCard]);

  let componentToRender;
  if (card) {
    componentToRender = <ChangeCard onDeleteCard={deleteCardHandler} onChangeInfoCard={changeInfoCardHandler} data={card} />
  } else {
    componentToRender = null;
    history.push("/");
  }

  return (
    <>
    {componentToRender}
    </>
  )
};

export default ChangeCardContainer;
