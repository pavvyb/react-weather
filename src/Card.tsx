import React from 'react'
import './styles.css'

type CardProps = {
    type: string,
    paragraph: string
}

function Card (props: CardProps) {
  return (
    <div className="Card">
      {
        <header>
            <h1
                className="Card-header"
            >
                { props.type }
            </h1>
        </header>
      }
    </div>
  )
}

export default Card
