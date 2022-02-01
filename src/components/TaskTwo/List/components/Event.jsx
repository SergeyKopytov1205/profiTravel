import React from "react"
import Subscription from "./components/Subscription"
import Content from "./components/Content"
import Speakers from "./components/Speakers"
import Time from "./components/Time"
import style from './Event.module.scss'

const Event = ({ event }) => {
   return (
      <div className={style.event__container}>
         <Time time={event.time} />
         <Content name={event.name} description={event.description} programs={event.programs} />
         <Subscription isSubscr={event.isFollow} setIsSubscr='' participants={event.followers} />
         <Speakers organization={event.organization} speakers={event.speakers} />
      </div>
   )
}

export default Event