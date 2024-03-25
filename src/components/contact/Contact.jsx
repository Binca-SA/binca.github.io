import React from 'react';
import './contact.css';



export default function Contact() { 
    return <section id='contact' className='section-contact'>
                <div className='flex-desk'>
                    <div className='container-title'>
                        <h5 className='container-title__title'>If you want to<br></br> ask,<br></br> create or<br></br> collaborate <span>...</span></h5>
                        <a className='container-title__cta txt-bold' href="mailto:binnas.shinaasi.asanova@gmail.com" target="_blank" >SEND ME AN E-MAIL</a>
                    </div>
                    <div className='flex-desk__row'>
                        <div className='container-cv containers-p-contact'>
                            <p className='container-cv__p text-size margin-top'>THANKS FOR YOUR VISIT!</p>
                            <button className=' container-cv__link style-link'><a className='style-link' href="https://binca-sa.github.io/" target="_blank" >CHECK MY CV</a></button>
                        </div>
                        <div className='container-social containers-p-contact atom-margin-bottom'>
                            <p className='container-social__p text-size margin-top-double'>FOLLOW MY ADVENTURES</p>
                            <ul className='container-social__links'>
                                <li className='container-social__link style-link'><a className='style-link' href="https://www.instagram.com/binca_22/" target="_blank" >INSTAGRAM</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://www.linkedin.com/in/binca-shinaasi-0b9792206/" target="_blank" >LINKEDIN</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://www.getmanfred.com/profile/binca" target="_blank" >MANFRED</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://github.com/Binca-SA" target="_blank" >GITHUB</a></li>
                                <li className='container-social__links style-link'><a className='style-link' href="https://codepen.io/binca-sa" target="_blank" >CODEPEN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
}
