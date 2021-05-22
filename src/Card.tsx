import React from 'react'
import './styles.css'
import Select from './Select'
import Date from './Date'
import Display from './Display'

type CardProps = {
    type: string,
    paragraph: string
}

function Card (props: CardProps) {
  return (
    <div className="Card">
        <header>
            <h1
                className="Card-header"
            >
                { props.type }
            </h1>
        </header>
        <main className="Card-content">
            <div className="Card-selectors">
                <Select type="Custom select" paragraph="1" />
                <Date type="Custom date picker" paragraph="1" />
            </div>
            <Display type="placeholder" paragraph="1" />
        </main>
    </div>
  )
}

export default Card
