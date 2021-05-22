import React from 'react'
import './styles.css'
import placeholder from './images/icons/weather/00.svg'

type DisplayProps = {
    type: string,
    paragraph: string
}

function Display (props: DisplayProps) {
  return (
    <div className="Display">
        <header>
            {/* <h1
                className="Card-header"
            >
                { props.type }
            </h1> */}
            {props.type === 'placeholder'
              ? <div className="Display-placeholder">
                  <img src={ placeholder } alt="" />
                  <span className="Display-placeholder-text">Fill in all the fields and the weather will be displayed</span>
                </div>
              : <img src={props.type} alt="" />
            }
        </header>
    </div>
  )
}

export default Display
