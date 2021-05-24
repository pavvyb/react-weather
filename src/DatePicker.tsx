import React, { useState } from 'react'
import './styles.css'
import calendar from './images/icons/16/calendar.png'

type DateProps = {
    type: string,
    paragraph: string,
    onSelectButtonClick: (selectedItem: any) => void
}

function DatePicker (props: DateProps) {
  const [isOpened, setOpened] = useState(false)
  const handleOpen = () => setOpened(!isOpened)
  const [dateValue, setDateValue] = useState('Select date')
  function onSelect (inp: any) {
    props.onSelectButtonClick(inp)
  }
  return (
      <div className="date">
          <div className="date-container" onClick={handleOpen}>
              <span>{dateValue}</span>
              <input type="date" className="date-container-input" placeholder={dateValue} onChange={event => onSelect(event.target.value)} />
              <img src={calendar} alt="" className="date-container-image" />
          </div>
      </div>
  )
}

export default DatePicker
