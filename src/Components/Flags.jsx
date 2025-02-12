// import React from 'react'
import "./Flags.css"

// eslint-disable-next-line react/prop-types
export default function Flags({name,img}) {


  return (
    <div className="Card" >
        <img style={{
          height:"60px",
          width:"60px",
        }} src={img} alt="Flag"/>
        <h2>{name}</h2>
    </div>
  )
}
