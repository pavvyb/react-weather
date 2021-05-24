import React, { useState } from 'react'
import './styles.css'
import leftchevron from './images/icons/24/chevron-left.svg'
import rightchevron from './images/icons/24/chevron-right.svg'
import placeholder from './images/icons/weather/00.svg'
import day1 from './images/icons/weather/01d.png'
import day2 from './images/icons/weather/02d.png'
import day3 from './images/icons/weather/03d.png'
import day4 from './images/icons/weather/04d.png'
import day9 from './images/icons/weather/09d.png'
import day10 from './images/icons/weather/10d.png'
import day11 from './images/icons/weather/11d.png'
import day13 from './images/icons/weather/13d.png'
import day50 from './images/icons/weather/50d.png'
import night1 from './images/icons/weather/01n.png'
import night2 from './images/icons/weather/02n.png'
import night3 from './images/icons/weather/03n.png'
import night4 from './images/icons/weather/04n.png'
import night9 from './images/icons/weather/09n.png'
import night10 from './images/icons/weather/10n.png'
import night11 from './images/icons/weather/11n.png'
import night13 from './images/icons/weather/13n.png'
import night50 from './images/icons/weather/50n.png'

type WeatherProps = {
    type: string,
    weatherList: any,
    setWeatherList: any,
    setOldWeatherList: any,
    oldWeatherList: any
}

function Weather (props: WeatherProps) {
  const [iterator, setIterator] = useState(0)
  const type = props.type
  function handleMovementRight () {
    if ((iterator + 2) < 6) {
      setIterator(iterator + 1)
    }
  }
  function handleMovementLeft () {
    if ((iterator - 1) >= 0) {
      setIterator(iterator - 1)
    }
  }
  function getImage (inp: string) {
    switch (inp) {
      case '01d':
        return day1
      case '01n':
        return night1
      case '02d':
        return day2
      case '02n':
        return night2
      case '03d':
        return day3
      case '03n':
        return night3
      case '04d':
        return day4
      case '04n':
        return night4
      case '09d':
        return day9
      case '09n':
        return night9
      case '10d':
        return day10
      case '10n':
        return night10
      case '11d':
        return day11
      case '11n':
        return night11
      case '13d':
        return day13
      case '13n':
        return night13
      case '50d':
        return day50
      case '50n':
        return night50
      default:
        return placeholder
    }
  }
  return (
    props.weatherList
      ? <div className="Weather">
            <header>
                {type === 'Forecast for a Date in the Past'
                  ? <div className="Weather-card_big">
                      <span className="Weather-card-text_big">{ props.oldWeatherList[0][0] }</span>
                      <img src={getImage(props.oldWeatherList[0][1])} alt="" className='Weather-card-icon_big' />
                      <span className="Weather-card-temperature_big">{ props.oldWeatherList[0][2] }°</span>
                    </div>
                  : <div className="Weather-carousel">
                      <img src={leftchevron} alt="" className="chevron" onClick={handleMovementLeft}/>
                      <div className="Weather-carousel-card">
                        <span className="Weather-carousel-card-text">{ props.weatherList[iterator][0] }</span>
                        <img src={getImage(props.weatherList[iterator][1])} alt="" className='Weather-carousel-card-icon' />
                        <span className="Weather-carousel-card-temperature">{ props.weatherList[iterator][2] }°</span>
                      </div>
                      <div className="Weather-carousel-card">
                        <span className="Weather-carousel-card-text">{ props.weatherList[iterator + 1][0] }</span>
                        <img src={getImage(props.weatherList[iterator + 1][1])} alt="" className='Weather-carousel-card-icon' />
                        <span className="Weather-carousel-card-temperature">{ props.weatherList[iterator + 1][2] }°</span>
                      </div>
                      <div className="Weather-carousel-card">
                        <span className="Weather-carousel-card-text">{ props.weatherList[iterator + 2][0] }</span>
                        <img src={getImage(props.weatherList[iterator + 2][1])} alt="" className='Weather-carousel-card-icon' />
                        <span className="Weather-carousel-card-temperature">{ props.weatherList[iterator + 2][2] }°</span>
                      </div>
                      <img src={rightchevron} alt="" className="chevron" onClick={handleMovementRight} />
                    </div>
                }
            </header>
        </div>
      : <></>
  )
}

export default Weather
