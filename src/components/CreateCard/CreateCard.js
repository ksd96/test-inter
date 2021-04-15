import "./style/create-card.scss";
import { useCallback, useState } from "react";
import PropTypes from 'prop-types';

const CreateCard = ({
  onCreateCard
}) => {
  const [state, setState] = useState({title: ``, text: ``, date: ``, like: false});

  const changeTitle = useCallback((evt) => {
    setState({
      title: evt.target.value,
      text: state.text,
      like: false,
      date: Date.now()
    })
  }, [state.text]);

  const changeText = useCallback((evt) => {
    setState({
      title: state.title,
      text: evt.target.value,
      like: false,
      date: Date.now()
    })
  }, [state.title]);

  const createCard = useCallback((evt) => {
    evt.preventDefault();
    onCreateCard(state);
  }, [onCreateCard, state]);

  return (
    <section className="create-card">
      <h1 className="create-card__title">Создать карточку</h1>
      <form onSubmit={createCard} className="create-card__form" name="create-card">
        <input className="create-card__form-title" type="text" onChange={changeTitle} value={state.title} name="title-card" placeholder="Введите заголовок" required />
        <textarea className="create-card__form-text" type="text" onChange={changeText} value={state.text} name="text-card" placeholder="Введите текст" required />
        <button className="create-card__submit" type="submit">Создать</button>
      </form>
    </section>
  )
};

CreateCard.propTypes = {
  onCreateCard: PropTypes.func
};

export default CreateCard;
