import React, { useState } from "react"
import { Link } from "react-router-dom"
import style from './Content.module.scss'

const Content = ({ name, description, programs }) => {
   const [programActive, setProgramActive] = useState(false)

   return (
      <div className={style.content__container}>
         <Link to='#' className={style.content__name}>{name}</Link>
         <Link to='#' className={style.content__description}>{description}</Link>
         <div>
            <button className={`${style.content__button} ${programActive ? style.content__button_active : ''}`} onClick={() => { setProgramActive(!programActive) }}>Программа</button>
            {programActive && (
               <ul className={style.content__list}>
                  {programs.map((elem, index) => {
                     return <li className={style.content__item} key={index}>{elem}</li>
                  })}
               </ul>
            )}
         </div>
      </div >
   )
}
export default Content