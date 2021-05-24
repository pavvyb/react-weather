import React, { useState } from 'react'
import './styles.css'
import placeholder from './images/icons/weather/00.svg'
import Weather from './Weather'

type DisplayProps = {
    type: string,
    isSelected: boolean [],
    coordinates: string [],
    data: string [],
    weatherList: any,
    setOldWeatherList: any,
    oldWeatherList: any,
    setWeatherList: any
}

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  return (
    <div className="Display">
        <header>
          { props.isSelected[0] === true && props.isSelected[1] === true && (props.weatherList.length > 0 || props.oldWeatherList.length > 0)
            ? <Weather type={props.type} weatherList={props.weatherList} setWeatherList={props.setWeatherList} setOldWeatherList={props.setOldWeatherList} oldWeatherList={props.oldWeatherList}/>
            : <div className="Display-placeholder">
                <img src={ placeholder } alt="" />
                <span className="Display-placeholder-text">Fill in all the fields and the weather will be displayed</span>
              </div>
          }
        </header>
    </div>
  )
}

export default Display
