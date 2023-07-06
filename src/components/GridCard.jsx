import React from 'react'
import "./grid-card.scss"
import {Link} from "react-router-dom"

const GridCard = ({children, text, buttonShowing ,heading}) => {
  return (
    <div className='grid-card'>
        <div className='icon-container'>
            {children}
        </div>
        <h2>{heading && heading}</h2>
    <p>{text}</p>
    {buttonShowing && <Link href="" className='card-button' to="/register">Зачлени се</Link>}
    </div>
  )
}

export default GridCard