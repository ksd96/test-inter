import "./style/sorting.scss";
import PropTypes from 'prop-types';

const Sort = ({sortMax, sortMin}) => {
  return (
    <div className="sorting">
      <h3 className="sorting__title">Сортировка:</h3>
      <button onClick={sortMax} className="sorting__button sorting__button_type_max">сначала более новые</button>
      <button onClick={sortMin} className="sorting__button sorting__button_type_min">сначала более старые</button>
    </div>
  )
};

Sort.propTypes = {
  sortMax: PropTypes.func,
  sortMin: PropTypes.func
};

export default Sort;
