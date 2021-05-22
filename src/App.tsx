import React from 'react'
import logo from './logo.svg'
import './styles.css'
import backgroundTop from './images/background/topBackgroundBig.png'
import backgroundBottom from './images/background/bottomBackgroundBig.png'
import Card from './Card'

function App () {
  return (
    <div className="App">
      {
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
          <Card type="7 Days Forecast" paragraph="1"/>
          <Card type="Forecast for a Date in the Past" paragraph="1"/>
        </div>
        /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default App
