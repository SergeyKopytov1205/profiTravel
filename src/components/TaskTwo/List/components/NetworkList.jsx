import React from "react";
import style from './NetworkList.module.scss'

const NetworkList = ({ data }) => {
   return (
      <div className={style.networkList__container}>
         <div className={style.networkList__date}>
            <div>{data.date}</div>
            <div>{data.day}</div>
         </div>
         <div className={style.networkList__content}>
            <div className={style.networkList__title}>
               День нетворкинга
            </div>
            <div className={style.networkList__descr}>
               В этот день открыта возможность проведения встреч в системе нетворкинга. Выберите партнеров в турбизнесе и начните общение с ними!
            </div>
            <button className={style.networkList__button}>
               Перейти в систему
            </button>
         </div>
      </div>
   )
}

export default NetworkList