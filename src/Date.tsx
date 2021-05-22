import React, { useState } from 'react'
import './styles.css'
import calendar from './images/icons/16/calendar.png'

type DateProps = {
    type: string,
    paragraph: string
}

function Date (props: DateProps) {
  const [isOpened, setOpened] = useState(false)
  const handleOpen = () => setOpened(!isOpened)
  return (
      <div className="Select">
        <div className="Select-container">
          <div className="Select-container-header" onClick={handleOpen}>
              <span>Select date</span>
              <img src={calendar} alt="" />
          </div>
          <div className={isOpened ? 'Select-options' : 'invisible'}>
              <ul className="Select-options-list">
                  1
              </ul>
          </div>
        </div>
      </div>
  )
}

export default Date
