import React, { useEffect } from 'react';
import IntroHome from '../../components/intro-home/IntroHome';
import './home.css';
import IntroPhrase from '../../components/intro-phrase/IntroPhrase';
import GetWorks from '../../components/card-work/Card';
import BgColour from '../../components/bg-colour-btns/BgColour';
import { useState } from 'react';
import Contact from '../../components/contact/Contact';

import { useParams } from 'react-router-dom';

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState();
    const { pathname } = useParams();

    const setStyle = (color) => {
        setBackgroundColor(color);
    };
    
    useEffect(() => {
        setTimeout( () => document.querySelector(window.location.hash).scrollIntoView(), 300);
    }, [pathname]);
    
    return <section className='section-home' style={{ background: backgroundColor }}>
                <IntroHome></IntroHome>
                <IntroPhrase></IntroPhrase>
                <GetWorks></GetWorks>
                <Contact></Contact>
                <BgColour changeColor={setStyle}></BgColour>
            </section>
}