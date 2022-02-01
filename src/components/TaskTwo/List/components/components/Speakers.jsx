import React from "react";
import style from './Speakers.module.scss'

const Speakers = ({ organization, speakers }) => {
   return (
      <div className={style.speakers__container}>
         <div className={style.speakers__organization}>
            <div>{organization}</div>
            <span></span>
         </div>
         {speakers && (
            <div className={style.speakers__team}>
               {speakers.map((speaker, index) => {
                  return (
                     <Speaker key={index} name={speaker.name} organization={speaker.organization} photo={speaker.photo} />
                  )
               })}
            </div>
         )}
      </div>
   )
}
export default Speakers

const Speaker = ({ name, organization, photo }) => {

   return (
      <div className={style.speaker__container}>
         <div className={style.speaker__photo}>
            <img src={`http://localhost:3000/img/${photo}`} alt={name} />
         </div>
         <div className={style.speaker__content}>
            <div className={style.speaker__name}>
               {name}
            </div>
            <div className={style.speaker__organization}>
               {organization}
            </div>
         </div>
      </div>
   )
}