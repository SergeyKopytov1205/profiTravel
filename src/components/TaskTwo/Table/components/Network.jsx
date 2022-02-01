import React from "react";
import style from './Network.module.scss'
import renameDays from "../../../../utils/utils";

const Network = ({ data }) => {
   return (
      <div className={style.network__container}>
         <div className={style.network__date}>
            <div>{data.date}, {renameDays(data.day.toLowerCase())}</div>
         </div>
         <div className={style.network__content}>
            <div className={style.network__title}>
               День нетворкинга
            </div>
            <div className={style.network__descr}>
               В этот день открыта возможность проведения встреч в системе нетворкинга. Выберите партнеров в турбизнесе и начните общение с ними!
            </div>
            <button className={style.network__button}>
               Перейти в систему
            </button>
         </div>
      </div>
   )
}

export default Network