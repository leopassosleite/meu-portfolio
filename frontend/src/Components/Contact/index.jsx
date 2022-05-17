import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './style.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zuin9n4', 'template_8tknnjo', form.current, '0zd9Y53aPEBOVGP-O')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="main-content">
            <section className="home home-section hidden">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <div className="i-left">
                                <div className="i-name">
                                    <span>Entrar em contato</span>
                                    <span>Contatate-me</span>
                                    <div className="blur -sblurl"
                                        style={{ background: "#ABF5FF94" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="c-right">
                            <form ref={form} onSubmit={sendEmail}>
                                <input style={{color:'var(--azul)'}} type="text" name="user_name" className="user" placeholder="Nome" />
                                <input style={{color:'var(--azul)'}} type="text" name="user_email" className="user" placeholder="Email" />
                                <textarea style={{background:'var(--white)', color:'var(--black)'}} name="message" className="user" placeholder="Menssagem" />
                                <button type="submit" className="button">Enviar</button>
                                <span style={{color: 'var(--azul)'}}>{done && "Obrigado por entrar em contato"}</span>
                                <div
                                    className="blur c-blurl"
                                    style={{ background: "var(--purple)" }}>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact