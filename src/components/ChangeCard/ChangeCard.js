import { useCallback, useState } from "react";
import "./style/change-card.scss";
import PropTypes from 'prop-types';

const ChangeCard = ({data, onChangeInfoCard, onDeleteCard}) => {
const [state, setState] = useState({title: data.title, text: data.text, date: data.date, like: false});

  const changeTitle = useCallback((evt) => {
    setState({
      title: evt.target.value,
      text: state.text,
      like: false,
      date: state.date
    })
  }, [state.text, state.date]);

  const changeText = useCallback((evt) => {
    setState({
      title: state.title,
      text: evt.target.value,
      like: false,
      date: state.date
    })
  }, [state.title, state.date]);

  const changeCard = useCallback((evt) => {
    evt.preventDefault();
    onChangeInfoCard(state);
  }, [onChangeInfoCard, state]);

  return (
    <section className="change-card">
      <h1 className="change-card__title">Изменить карточку</h1>
      <form onSubmit={changeCard} className="change-card__form" name="change-card">
        <input className="change-card__form-title" type="text" onChange={changeTitle} value={state.title} name="title-card" placeholder="Введите заголовок" required/>
        <textarea className="change-card__form-text" type="text" onChange={changeText} value={state.text} name="text-card" placeholder="Введите текст" required />
        <div className="change-card__buttons">
          <button className="change-card__submit" type="submit">Изменить</button>
          <button onClick={onDeleteCard} className="change-card__delete" type="button">Удалить</button>
        </div>
      </form>
    </section>
  )
};

ChangeCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    like: PropTypes.bool
  }),
  onChangeInfoCard: PropTypes.func,
  onDeleteCard: PropTypes.func
};

export default ChangeCard;
