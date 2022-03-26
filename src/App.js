import React, {useEffect, useState} from 'react'
import './App.css'
import coverVid from './video/video-bcg.mp4'
import coverImg from './img/background-mobile1.png'

const App = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  useEffect(() => {
    getTime()
    const interval = setInterval(() => getTime(), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  function getTime () {
    const now = new Date()
    const newYear = new Date('Jan 1 2023 00:00:00')
    setDays(Math.floor((newYear - now) / 1000 / 60 / 60 / 24))
    setHours(Math.floor((newYear - now) / 1000 / 60 / 60 % 24))
    setMinutes(Math.floor((newYear - now) / 1000 / 60 % 60))
    setSeconds(Math.floor((newYear - now) / 1000 % 60))
  }

  function declOfNum(number, titles) {
     let cases = [2, 0, 1, 1, 1, 2]
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }

  return (
    <div className="App">
      <div className="video-wrapper">
        <img className="background-img" src={coverImg} alt="background"/>
        <video autoPlay muted loop className="video__block">
          <source src={coverVid} type="video/mp4"/>
        </video>
      </div>
      <div className="container">
        <div className="time-wrapper">
          <div className="time-wrapper--item">{days}</div>
          <div className="time-wrapper--desc">{declOfNum(days, ['день', 'дня', 'дней'])}</div>
        </div>
        <div className="time-wrapper">
          <div className="time-wrapper--item">{hours}</div>
          <div className="time-wrapper--desc">{declOfNum(hours, ['час', 'часа', 'часов'])}</div>
        </div>
        <div className="time-wrapper">
          <div className="time-wrapper--item">{minutes}</div>
          <div className="time-wrapper--desc">{declOfNum(minutes, ['минута', 'минуты', 'минут'])}</div>
        </div>
        <div className="time-wrapper">
          <div className="time-wrapper--item">{seconds}</div>
          <div className="time-wrapper--desc">{declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}</div>
        </div>
      </div>
    </div>
  )
}

export default App
