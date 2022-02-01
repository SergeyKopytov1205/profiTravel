import React from 'react';
import { Link } from 'react-router-dom';
import style from './Button.module.scss'

const Button = ({title, path}) => {
   return (
      <Link className={style.link} to={path}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {title}
      </Link>
   )
}

export default Button