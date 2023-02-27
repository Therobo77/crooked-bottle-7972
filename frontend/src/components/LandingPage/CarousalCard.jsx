import React from 'react'
import "./CarousalCard.css"

const CarousalCard = ({id,img,title,offer_price,desc}) => {
  return (
    <div className='Caraousal-card-container' key={id}>
    <img src={img}/>
    <h1>{title}</h1>
    <h2 style={{color:"green"}}>{offer_price}</h2>
    <p style={{color:"gray"}}>{desc}</p>
    

    </div>
  )
}

export default CarousalCard