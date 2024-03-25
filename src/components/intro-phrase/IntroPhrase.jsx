import React from 'react';

import './introPhrase.css';




export default function IntroPhrase() { 
    return (
    <>
            <section className='section-phrase vh'>
                <div className='section-phrase__container'>
                    <p className='section-phrase__container__ph'>With a focus on improving user experiences, I combine aesthetics with problem solving to create impactful solutions by ensuring that each project has a clear purpose and effectively solves a specific need.</p>
                    <button className='section-phrase__container__cta'><a className='link-anchor' href='#works'>SEE MY PROJECTS</a></button>
                </div>
            </section> 

    </>

    );

}