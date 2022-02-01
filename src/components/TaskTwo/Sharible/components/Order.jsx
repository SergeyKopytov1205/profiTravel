import React from "react";
import style from './Order.module.scss'

const Order = () => {
   return (
      <div className={style.order__container}>
         <div className={style.order__name}>
            Порядок:
         </div>
         <div className={style.order__weeks}>
            <div className={`${style.order__week} ${style.order__week_active}`}>1-я неделя</div>
            <div className={style.order__week}>2-я неделя</div>
            <div className={style.order__week}>3-я неделя</div>
         </div>
      </div>
   )
}

export default Order