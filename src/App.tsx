import React from 'react'
import logo from './logo.svg'
import './styles.css'
import backgroundTop from './images/background/topBackgroundBig.png'
import backgroundBottom from './images/background/bottomBackgroundBig.png'

function App () {
  return (
    <div className="App">
      {
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${backgroundTop}), url(${backgroundBottom})` }}
        >
          <img src={logo} className="App-logo" alt="logo" />
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
