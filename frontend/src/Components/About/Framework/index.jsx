import React from 'react';
import './style.css';
import Card from '../../Card';
import Reactjs from '../../../Assets/img/react.png';
import Angular from '../../../Assets/img/angular.png';
import Springboot from '../../../Assets/img/springboot.png';
import JAVA from '../../../Assets/img/Java.png';
import javascript from '../../../Assets/img/javascript.png';
import HTML5 from '../../../Assets/img/html5.png';
import CSS3 from '../../../Assets/img/CSS3.png';
import PostgreSQL from '../../../Assets/img/postgresql.png';
import MySQL from '../../../Assets/img/mysql.png';
import Fadergs from '../../../Assets/img/fadergs.png'
import Dio from '../../../Assets/img/dio.png'
import Udemy from '../../../Assets/img/udemy.png'
import Resume from '../../../Curriculo Leonardo.docx'

import { motion } from 'framer-motion';

const transition = { duration: 2, type: 'spring' }

const Service = () => {
    return (
        <div className="main-content">
            <section className="service">
                <div className="container">
                    <div className="row">
                        <div className="service-info padd-15">
                            <div className="i-left">
                                <div className="i-name">
                                    <span>Meus conhecimentos</span>
                                    <span>Serviços</span>
                                    <p> Ha menos de 1 ano comecei a minha jornada
                                        para me tonar um desenvolvedor fullstack...
                                    </p>
                                    <a href={Resume} download>
                                        <button className=" button s-button">Dowload CV</button>
                                    </a>
                                    <div className="experience">
                                        <div className="achieviment">
                                        <div className='blur' style={{ background: "white"}}></div>
                                            <div className="circle">6+</div>
                                            <span>Meses</span>
                                            <span>experiência</span>
                                        </div>
                                        <div className="achieviment">
                                            <div className="circle">4+</div>
                                            <span>Projetos</span>
                                            <span>completados</span>
                                        </div>
                                        <div className="achieviment">
                                            <div className="circle">2º</div>
                                            <span>Semestre</span>
                                            <span>Fadergs</span>         
                                        </div>
                                    </div>
                                    <div className="schools">
                                        <div className="awesome">
                                            <span>Escolas</span>
                                            <span>Formações & cursos adicionais</span>
                                            <spane>Atualmente cursando segundo semestre em
                                                análise e desenvolvimento de sistemas pela FADERGS
                                            </spane>
                                            <button className="button s-button">Veja mais</button>
                                        </div>
                                        <div className="w-right">
                                            <motion.div className="w-mainCircle"
                                                initial={{ rotate: 45 }}
                                                whileInView={{ rotate: 0 }}
                                                viewport={{ margin: '-40px' }}
                                                transition={{ duration: 4.5, type: 'spring' }}>
                                                <div className="w-secCircle">
                                                    <img src={Fadergs} alt="" />
                                                </div>
                                                <div className="w-secCircle">
                                                    <img style={{ transform: 'scale(0.5)' }}
                                                        src={Dio} alt="" />
                                                </div>
                                                <div className="w-secCircle">
                                                    <img style={{ transform: 'scale(0.3)' }} src={Udemy} alt="" />
                                                </div>
                                            </motion.div>
                                            <div className="w-backCircle blueCircle"></div>
                                            <div className="w-backCircle yellowCircle"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <motion.div
                                initial={{ left: '18rem' }}
                                whileInView={{ left: '20rem' }}
                                transition={transition}
                            >
                                <Card
                                    logoA={Angular}
                                    logoB={Springboot}
                                    logoC={Reactjs}
                                    heading={'Frameworks & Bibliotecas'}
                                    detail={"Angular, Springboot, Reactjs"} />
                            </motion.div>

                            <motion.div
                                initial={{ left: '5rem' }}
                                whileInView={{ left: '3rem' }}
                                transition={transition}
                                style={{ top: "12rem", left: "-4rem" }}
                            >
                                <Card
                                    logoA={JAVA}
                                    logoB={javascript}
                                    logoC={HTML5}
                                    logoD={CSS3}
                                    heading={'Linguagens'}
                                    detail={"JAVA, javascript, HTML5, CSS3"} />
                            </motion.div>

                            <motion.div
                                initial={{ left: '18rem' }}
                                whileInView={{ left: '20rem' }}
                                transition={transition}
                                style={{ top: "22rem" }}
                            >
                                <Card
                                    logoA={PostgreSQL}
                                    logoB={MySQL}
                                    heading={'SGBD & SGB'}
                                    detail={"PostrgreSQL, MySQL"} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service