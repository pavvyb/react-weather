import React, { useState } from 'react'
import './styles.css'
import chevron from './images/icons/16/chevron-top.svg'

type SelectProps = {
    type: string,
    paragraph: string,
    onSelectButtonClick: (selectedItem: any) => void
}

function Select (props: SelectProps) {
  function getCoordinates (inp: any) {
    switch (inp) {
      case 'Samara':
        return [53.195873, 50.100193]
      case 'Tolyatti':
        return [53.507836, 49.420393]
      case 'Saratov':
        return [51.533557, 46.034257]
      case 'Kazan':
        return [55.796127, 49.106405]
      case 'Krasnodar':
        return [45.035470, 38.975313]
    }
  }
  const [selectStyle, setSelectStyle] = useState('Select-container-header')
  const [isOpened, setOpened] = useState(false)
  const [placeholderValue, setPlaceholderValue] = useState('Select city')
  const handleOpen = () => {
    setOpened(!isOpened)
    setSelectStyle('Select-container-header selected')
  }
  const [city, setCity] = useState([
    'Samara',
    'Tolyatti',
    'Saratov',
    'Kazan',
    'Krasnodar'
  ])
  // let marker = false
  const onCityClick = (selectedItem: any) => {
    setSelectStyle('Select-container-header filled')
    setPlaceholderValue(selectedItem)
    const coordinates = getCoordinates(selectedItem)
    props.onSelectButtonClick(coordinates)
    setOpened(!isOpened)
  }
  const cities = city.map((currentCity: string) => (
    <li
      key={Math.random()}
      className="Select-options-list-item"
      onClick={() => onCityClick(currentCity)}
    >
        <span className="Select-options-list-item-text">
          {currentCity}
        </span>
    </li>
  ))
  return (
    <div className="Select">
      <div className="Select-container">
        <div className={selectStyle} onClick={handleOpen}>
            <span>{ placeholderValue }</span>
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
