import React from 'react'
import './style.css'

const Card = ({ logoA, logoB, logoC, logoD, heading, detail }) => {
    return (
        <div className="card">
            <div className="logo">
                <img src={logoA} alt="" />
                <img src={logoB} alt="" />
                <img src={logoC} alt="" />
                <img src={logoD} alt="" />
            </div>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">Saiba mais</button>
        </div>
    )
}

export default Card