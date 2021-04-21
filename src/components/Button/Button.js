import React from 'react';
import style from './Button.module.css';

export default function Button({ title, fnTimer, buttonStatus}) {
  return (
    <button
      // className={style.button__title}
      disabled={buttonStatus}
      onClick={fnTimer}
      >{title}
    </button>

    //   <NavLink
    //     to={route}
    //     className={style.button__title}
    //     activeClassName={style.button__title_active}
    // >
    //     {title}
    //   </NavLink>
  );
}
