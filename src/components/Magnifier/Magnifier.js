import PropTypes from 'prop-types';
import classNames from "classnames";
import "./style/magnifer.scss";
import { useCallback } from 'react';

const Magnifier = ({text, x, y, refEl}) => {
  const coordinates = {
    top: y,
    left: x,
  };

  const classMagnifer = classNames({
    "magnifer": true,
    "magnifer_active": text !== ""
  });

  return (
    <div ref={refEl} className={classMagnifer} style={coordinates}>
      <p className="magnifer__text">{text}</p>
    </div>
  )
};

Magnifier.propTypes = {
  text: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
};

export default Magnifier;
