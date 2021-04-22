import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button({ title, fnTimer, buttonStatus }) {
  return (
    <>
      {title === 'Wait' ? (
        <button className={style.button__title} disabled={buttonStatus} onDoubleClick={fnTimer}>
          {title}
        </button>
      ) : (
        <button className={style.button__title} disabled={buttonStatus} onClick={fnTimer}>
          {title}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  fnTimer: PropTypes.func,
  buttonStatus:PropTypes.bool,
}