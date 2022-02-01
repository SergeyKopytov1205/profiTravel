import React from "react";
import style from './Section.module.scss'
import Item from './Item'
import renameDays from "../../../../utils/utils";

const Section = ({ data}) => {

   return (
      <div className={style.section__container}>
         <div className={style.section__title}>
            <div>{data.date}, {renameDays(data.day.toLowerCase())}</div>
         </div>
         <div className={style.section__content}>
            {data.events.map((event, index) => {
               return (
                  <Item key={index} data={event} />
               )
            })}
         </div>

      </div>
   )
}

export default Section