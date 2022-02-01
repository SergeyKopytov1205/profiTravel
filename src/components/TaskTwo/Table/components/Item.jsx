import React, { useState } from "react";
import style from './Item.module.scss'
import { Link } from "react-router-dom";

const Item = ({ data }) => {
   const [isFollow, setIsFollow] = useState(data.isFollow)
   const [hover, setHover] = useState(false)

   return (
      <div className={style.item__container}>
         <div className={style.item_content}>
            <div className={style.item__time}>
               <div>{data.time}</div>
               <div>МСК</div>
            </div>
            {data.isLive && (
               <div className={style.item__live}>
                  live
               </div>
            )}
            <Link to='#' className={style.item__organization}>
               {data.organization}
            </Link>
            <div className={style.item__description}>
               {data.description}
            </div>
         </div>
         <div onClick={() => { setIsFollow(!isFollow) }}
            className={isFollow ? style.item__button_enabled : style.item__button_disabled} onMouseMove={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} >
            {isFollow
               ? <div>{hover ? 'Убрать' : 'В календаре'}</div>
               : <div>Добавить <br /> в календарь</div>}
            <button></button>
         </div>
      </div>
   )
}

export default Item