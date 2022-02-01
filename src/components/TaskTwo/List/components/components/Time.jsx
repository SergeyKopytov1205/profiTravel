import React from "react";
import style from './Time.module.scss'

const Time = ({ time }) => {
   return (
      <div className={style.time__container}>
         <div>{time}</div>
         <div>МСК</div>
      </div>
   )
}
export default Time