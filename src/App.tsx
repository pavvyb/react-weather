import React, { useCallback, useState } from 'react'
import logo from './logo.svg'
import './styles.css'
import backgroundTop from './images/background/topBackgroundBig.png'
import backgroundBottom from './images/background/bottomBackgroundBig.png'
import Card from './Card'

function App () {
  const [weatherList, setWeatherList] = useState([])
  const [oldWeatherList, setOldWeatherList] = useState([])
  return (
    <div className="App">
        <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundTop}), url(${backgroundBottom})` }}>
          <header className="App-header">
            <span className="App-header-text"><span className="transformed-left">Weather</span><span className="transformed-right">forecast</span></span>
          </header>
          <main>
            <Card type="7 Days Forecast" paragraph="1" setWeatherList={setWeatherList} weatherList={weatherList} setOldWeatherList={setOldWeatherList} oldWeatherList={oldWeatherList}/>
            <Card type="Forecast for a Date in the Past" paragraph="1" setWeatherList={setWeatherList} weatherList={weatherList} setOldWeatherList={setOldWeatherList} oldWeatherList={oldWeatherList}/>
          </main>
          <footer>
            <span className="footerText">
              С ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT
            </span>
          </footer>
        </div>
    </div>
  )
}

export default App
