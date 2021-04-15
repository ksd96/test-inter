import "./style/card.scss";
import classNames from "classnames";
import { useCallback } from "react";
import PropTypes from 'prop-types';

const Card = ({
  data,
  onLikeCard,
  onChangeActiveCard
}) => {

  const classButtonLike = classNames({
    "card__button-like": true,
    "card__button-like_active": data.like === true
  });

  const likeCard = useCallback(() => {
    onLikeCard(data.date)
  }, [onLikeCard, data.date]);

  const changeActiveCard = useCallback(() => {
    onChangeActiveCard(data.date);
  }, [onChangeActiveCard, data.date]);

  return (
    <li className="card">
      <h3 className="card__title">{data.title}</h3>
      <p className="card__text">{data.text}</p>
      <div className="card__buttons">
        <button onClick={changeActiveCard} className="card__button-edit" type="button"></button>
        <button onClick={likeCard} className={classButtonLike} type="button"></button>
      </div>
    </li>
  )
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.number,
    like: PropTypes.bool
  }),
  onLikeCard: PropTypes.func,
  onChangeActiveCard: PropTypes.func
};

export default Card;
