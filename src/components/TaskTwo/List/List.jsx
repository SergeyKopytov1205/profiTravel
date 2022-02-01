import React from "react";
import Day from "./components/Day";
import NetworkList from "./components/NetworkList";
import style from './List.module.scss'

const List = ({ programs }) => {
   return (
      <div className={style.list__container}>
         {programs.map((day, index) => {
            if (day.isNetwork) return <NetworkList key={index} data={day} />
            return <Day key={index} day={day} />
         })}
      </div>
   )
}

export default List