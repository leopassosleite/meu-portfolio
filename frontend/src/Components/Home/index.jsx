import React from 'react'

import FloatingDiv from '../FloatingDiv';
import MinhaFoto from '../../Assets/img/eu.png';
import MeuAvatar from '../../Assets/img/meuAvatar.png';
import Reactjs from '../../Assets/img/react.png';
import Spring from '../../Assets/img/springboot.png';
import './style.css'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const transition = { duration: 2, type: 'spring' }

const Home = () => {
    return (
        <div className="main-content">
            <section className="home home-section">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <div className="i-left">
                                <div className="i-name">
                                    <span>OI! Meu nome é <span>Leonardo Leite</span></span>
                                    <span>Eu sou Full Stack developer</span>
                                    <p>Futuro Fullstack developer, buscando expêriencia
                                        em Reactjs, Angular e Springboot, me qualificando
                                        para o mercado de trabalho...
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Link to="/contato"><button className="button i-button">Contate-me</button></Link>
                            </div>
                        </div>
                        <div className="home-img">
                            <img src={MinhaFoto} alt="eu"></img>
                            <div className="i-right">
                                <motion.img
                                    initial={{ left: '-36%' }}
                                    whileInView={{ left: '-24%' }}
                                    transition={transition}
                                    src={MeuAvatar}
                                    alt=""
                                    className="avatar-nft" />

                                <motion.div
                                    initial={{ left: "48%" }}
                                    whileInView={{ left: '55%' }}
                                    transition={transition}
                                    style={{ top: '-2rem' }}
                                    className="floating-div-react">
                                    <FloatingDiv image={Reactjs} />
                                </motion.div>

                                <motion.div
                                    initial={{ left: '35%' }}
                                    whileInView={{ left: '-1rem' }}
                                    transition={transition}
                                    style={{ top: '18.2rem', right: '65%' }}
                                    className="floating-div-spring">
                                    <FloatingDiv image={Spring} />
                                </motion.div>
                                <div className='blur' style={{ background: "var(--azul)"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home