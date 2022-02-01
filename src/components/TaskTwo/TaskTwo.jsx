import React, { useEffect, useState } from "react";
import Table from "./Table/Table";
import List from "./List/List";
import style from './TaskTwo.module.scss'
import Title from "./Sharible/Title";
import { useSelector } from "react-redux";

const TaskTwo = () => {
   const programs = useSelector(state => state.programs)
   const screenWidth = window.screen.width
   const [isTable, setIsTable] = useState(true)
   console.log(programs);
   useEffect(() => {
      if (screenWidth < 1280) {
         setIsTable(false)
      }
   }, [screenWidth])

   return (
      <div className={style.taskTwo__container}>
         <Title isTable={isTable} setIsTable={setIsTable} />
         {isTable ? <Table programs={programs} /> : <List programs={programs} />}
      </div>
   )
}
export default TaskTwo