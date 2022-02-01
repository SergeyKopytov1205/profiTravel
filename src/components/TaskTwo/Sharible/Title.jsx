import React from "react"
import style from './Title.module.scss'
import Order from "./components/Order"

const Title = ({ isTable, setIsTable }) => {
   return (
      <div style={{ maxWidth: `${isTable ? '1120px' : ''}` }} className={style.title__container}>
         <div className={style.title__content}>
            <div className={style.title__name}>Программа выставки</div>
            <div className={style.title__toggle} onClick={() => { setIsTable(!isTable) }} >
               Вид расписания:
               <span>{isTable ? 'Список' : 'Таблица'} </span>
            </div>
         </div>
         {isTable && <Order />}
      </div>
   )
}

export default Title