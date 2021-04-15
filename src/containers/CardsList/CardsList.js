import "./style/cards.scss";
import Card from "../../components/Card/Card";
import AddCard from "../../components/AddCard/AddCard";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { actionsPlaces } from "../../store/actions/actionsPlaces";
import { useHistory } from 'react-router-dom';
import Sort from "../../components/Sort/Sort";
import { changeStorage } from "../../store/utils/utils";

const CardsList = () => {
  const store = useSelector((store) => store.cards);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let cardsStore = JSON.parse(localStorage.getItem("cards"));
    if (!cardsStore) {
      changeStorage({});
      cardsStore = {};
    }
    dispatch(actionsPlaces.changeCards(cardsStore));
  }, [dispatch]);

  const likeCardHandler = useCallback((date) => {
    const newCards = store.cards;
    const item = newCards[date];
    if (item.like === true) {
      item.like = false
    } else {
      item.like = true
    };
    dispatch(actionsPlaces.changeCards(newCards));
    changeStorage(newCards);
  }, [store.cards, dispatch]);

  const changeActiveCardHandler = useCallback((date) => {
    dispatch(actionsPlaces.changeActiveCard(date));
    history.push("/test-inter/change");
  }, [dispatch, history]);

  const sortMax = useCallback(() => {
    dispatch(actionsPlaces.changeSort(`max`));
  }, [dispatch]);

  const sortMin = useCallback(() => {
    dispatch(actionsPlaces.changeSort(`min`));
  }, [dispatch]);

  let cardsToRender;
  if (store.cards && store.sort === `max`) {
    cardsToRender = Object.values(store.cards).sort((a, b) => {return b.date - a.date});
  } else if (store.cards && store.sort === `min`) {
    cardsToRender = Object.values(store.cards).sort((a, b) => {return a.date - b.date});
  } else {
    cardsToRender = null;
  };

  return (
    <>
    <Sort sortMax={sortMax} sortMin={sortMin} />
    <ul className="cards">
      <AddCard />
      {cardsToRender && cardsToRender.map((card) => {
        return (
          <Card key={card.date} onChangeActiveCard={changeActiveCardHandler} onLikeCard={likeCardHandler} data={card}/>
        )
      })}
    </ul>
    </>
  )
};

export default CardsList;
