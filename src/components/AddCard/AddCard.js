import { Link } from 'react-router-dom';
import "./style/add-card.scss";

const AddCard = () => {
  return (
    <li className="add-card">
      <Link className="add-card__button" to="/create"><span className="add-card__span"></span></Link>
    </li>
  )
};

export default AddCard;
