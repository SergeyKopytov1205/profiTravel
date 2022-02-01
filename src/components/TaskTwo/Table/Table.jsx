import React from "react"
import Network from "./components/Network"
import Section from "./components/Section"
import style from './Table.module.scss'

const Table = ({ programs }) => {
   return (
      <div className={style.table__container}>
         {programs.map((day, index) => {
            if (day.isNetwork) return <Network key={index} data={day} />
            return <Section key={index} data={day} />
         })}
      </div>
   )
}

export default Table