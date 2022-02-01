import React from "react";
import Event from "./Event";
import style from './Day.module.scss'

const Day = ({ day }) => {
   return (
      <div className={style.day__container}>
         <div className={style.day__title}>
            <div>{day.date}</div>
            <div>{day.day}</div>
         </div>
         <div className={style.day__content}>
            {day.events.map((event, index) => {
               return (
                  <Event key={index} event={event} />
               )
            })}
         </div>

      </div>
   )
}

export default Day