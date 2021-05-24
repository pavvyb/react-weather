import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react'
import './styles.css'
import Select from './Select'
import DatePicker from './DatePicker'
import Display from './Display'

type CardProps = {
    type: string,
    paragraph: string,
    setWeatherList: any,
    setOldWeatherList: any,
    oldWeatherList: any,
    weatherList: any
}

function Card (props: CardProps) {
  const [coordinatesFlag, setCoordinatesFlag] = useState(['', ''])
  const [selected, setSelected] = useState([false, false])
  let lat = '0'
  let lon = '0'
  let dt = '0'
  const apiKey = '01dd803057c843363cfeea66631e6702'
  function convertTemperature (inp: any) {
    const celsius = Math.floor((Number.parseFloat(inp) - 273) * 10) / 10
    if (inp > 0) {
      return '+' + celsius.toString()
    }
    return celsius.toString()
  }
  function convertDate (inp: any): any {
    const milliseconds = inp * 1000
    const dateObject : Date = new Date(milliseconds)
    const dateResult = dateObject.toLocaleString('en-US', { day: 'numeric' }) + ' ' + dateObject.toLocaleString('en-US', { month: 'long' }).toLowerCase().substring(0, 3) + ' ' + dateObject.toLocaleString('en-US', { year: 'numeric' })
    return dateResult
  }
  function prepareData (inp : any, type: string, unixTime: string) {
    const answer : any = []
    console.log(inp)
    if (type === 'current') {
      const helperVariable = inp.daily
      for (let index = 0; index < 8; index++) {
        const element = helperVariable[index]
        const weatherDate = convertDate(element.dt)
        const weatherCode = element.weather[0].icon
        const weatherTemperature = convertTemperature(element.temp.day)
        answer.push([weatherDate, weatherCode, weatherTemperature])
      }
    }
    else if (type === 'old') {
      const helperVariable = inp.current
      const weatherDate = convertDate(helperVariable.dt)
      const weatherCode = helperVariable.weather[0].icon
      const weatherTemperature = convertTemperature(helperVariable.temp)
      answer.push([weatherDate, weatherCode, weatherTemperature])
    }
    return answer
  }
  function convertToUnix (inp: any) {
    const date = inp.split('-')
    const answer = (new Date(date[0] + '.' + date[1] + '.' + date[2]).getTime() / 1000).toFixed(0)
    return answer
  }
  function getWeathers () {
    const currentCall = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,hourly,alerts&appid=' + apiKey
    fetch(currentCall)
      .then(res => res.json())
      .then((data) => {
        const answer = prepareData(data, 'current', '')
        props.setWeatherList(answer)
      })
      .catch(console.log)
  }
  function getOldWeather () {
    const historicalCall = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + lat + '&lon=' + lon + '&dt=' + dt + '&appid=' + apiKey
    fetch(historicalCall)
      .then(res => res.json())
      .then((data) => {
        const answer = prepareData(data, 'old', dt)
        props.setOldWeatherList(answer)
      })
      .catch(console.log)
  }
  const onSelectInputChange = (selectedItem: any) => {
    setCoordinatesFlag(selectedItem)
    if (props.type === '7 Days Forecast') {
      setSelected([true, true])
      lat = selectedItem[0]
      lon = selectedItem[1]
      console.log(coordinatesFlag)
      getWeathers()
    }
    else {
      if (selected[1] === true) {
        setSelected([true, true])
      }
      else {
        setSelected([true, false])
      }
    }
  }
  const onDateInputChange = (selectedItem: any) => {
    dt = convertToUnix(selectedItem)
    if (selected[0] === true) {
      setSelected([true, true])
      getOldWeather()
    }
    else {
      setSelected([false, false])
    }
  }
  return (
    <div className="Card">
        <header>
            <h1
                className="Card-header"
            >
                { props.type }
            </h1>
        </header>
        <main className="Card-content">
            <div className="Card-selectors">
                <Select
                    type="Custom select"
                    paragraph="1"
                    onSelectButtonClick={onSelectInputChange}
                />
                {props.type === 'Forecast for a Date in the Past'
                  ? (
                    <DatePicker
                        type="Custom date picker"
                        paragraph="1"
                        onSelectButtonClick={onDateInputChange}
                    />
                    )
                  : <div></div>
                }
            </div>
            <Display isSelected={selected} coordinates={coordinatesFlag} type={props.type} data={coordinatesFlag} weatherList={props.weatherList} setWeatherList={props.setWeatherList} setOldWeatherList={props.setOldWeatherList} oldWeatherList={props.oldWeatherList}/>
        </main>
    </div>
  )
}

export default Card
