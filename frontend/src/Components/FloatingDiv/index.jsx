import React from 'react'
import './style.css'

const FloatingDiv = ({image, txt}) => {
  return (
    <div className="floatingdiv">
        <img src={image} alt="" />
        <span>{txt}</span>
    </div>
  )
}

export default FloatingDiv