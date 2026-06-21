import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className="container">
    <div className='cards'>
        <h1>{ props.title}</h1>
        <body className='detail'>{props.details }</body>
        <p>{props.description}</p>
    </div>
   


    </div>
  )
}

export default Cards