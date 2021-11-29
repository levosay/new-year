import React, {useEffect, useState} from 'react'
import './App.css'

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
    const newYear = new Date('Jan 1 2022 00:00:00')
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
      <video autoPlay muted loop id="myVideo">
        <source src="https://vod-progressive.akamaized.net/exp=1638204112~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3353%2F25%2F641767478%2F2942165542.mp4~hmac=8a136101f1fa83dcce3540fe5ac119b5b760c1ef062ecf940bec700d8d95575f/vimeo-prod-skyfire-std-us/01/3353/25/641767478/2942165542.mp4?filename=Trees+-+93826.mp4" type="video/mp4" />
      </video>
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
