import React, { useState } from 'react'
import './styles.css'
import chevron from './images/icons/16/chevron-top.svg'

type SelectProps = {
    type: string,
    paragraph: string
}

function Select (props: SelectProps) {
  const [isOpened, setOpened] = useState(false)
  const handleOpen = () => setOpened(!isOpened)
  const [city, setCity] = useState(['Sankt Peterburg', 'Saratov', 'Samara', 'Saransk', 'Supercity'])
  const cities = city.map((currentCity: string) => {
    return <li key={ Number.parseInt(currentCity) - 0 } className="Select-options-list-item"> <span className="Select-options-list-item-text"> { currentCity } </span> </li>
  })
  return (
    <div className="Select">
      <div className="Select-container">
        <div className="Select-container-header" onClick={handleOpen}>
            <span>Select city</span>
            <img src={chevron} alt="" className={isOpened ? 'rotate' : ''} />
        </div>
        <div className={isOpened ? 'Select-options' : 'invisible'}>
            <ul className="Select-options-list">
                {cities}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Select
