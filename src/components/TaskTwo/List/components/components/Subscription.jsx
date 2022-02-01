import React from "react";
import style from './Subscription.module.scss'

const Subscription = ({ isSubscr, setIsSubscr,  participants }) => {
   return (
      <div className={style.subscription__container}>
         <button className={`${style.subscription__button} ${isSubscr ? style.subscription__button_enabled : ''}`}>{isSubscr ? 'Добавлено' : 'Добавить'}</button>
         {participants && (
            <div className={style.subscription__participants}>
               {`${participants} участников уже записались`}
            </div>
         )}
      </div>

   )
}
export default Subscription