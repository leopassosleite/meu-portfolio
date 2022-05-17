import React from 'react'
import './style.css'

import About from '@iconscout/react-unicons/icons/uil-user'
import Services from '@iconscout/react-unicons/icons/uil-react'
import Projects from '@iconscout/react-unicons/icons/uil-bag'
import Contact from '@iconscout/react-unicons/icons/uil-comments-alt'
import House from '@iconscout/react-unicons/icons/uil-home'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="aside">
            <div className="logo">
                <Link to='/'><span>LEONARDO</span></Link>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li>
                    <Link to="/home"><i><House /></i>Inicio</Link>
                </li>
                <li>
                    <Link to='/'><i><About /></i>Sobre</Link>
                </li>
                <li>
                    <Link to='/conhecimentos'><i><Services /></i>Conhecimentos</Link>
                </li>
                <li>
                    <Link to='/projetos'><i><Projects /></i>Projetos</Link>
                </li>
                <li>
                    <Link to='/contato'><i><Contact /></i>Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar