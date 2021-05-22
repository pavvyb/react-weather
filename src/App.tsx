import React from 'react'
import logo from './logo.svg'
import './styles.css'
import backgroundTop from './images/background/topBackgroundBig.png'
import backgroundBottom from './images/background/bottomBackgroundBig.png'
import Card from './Card'

function App () {
  return (
    <div className="App">
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${backgroundTop}), url(${backgroundBottom})` }}
        >
          <header
            className="App-header"
          >
            Weather forecast
          </header>
          <img src={logo} className="App-logo" alt="logo" />
          <main>
            <Card type="7 Days Forecast" paragraph="1"/>
            <Card type="Forecast for a Date in the Past" paragraph="1"/>
          </main>
          <footer>
            <span
              className="footerText"
            >
              С ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT
            </span>
          </footer>
        </div>
    </div>
  )
}

export default App
