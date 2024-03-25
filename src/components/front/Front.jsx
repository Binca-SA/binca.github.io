import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


function FrontWorks(){

    const [front, setFront] = useState({});

    const parameters = useParams();
    //getting json//
    useEffect(() => {
        axios.get('../json/works.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id)
                setFront(selectedProject)
            });
    }, [])


    return (
    <>
    <div className='container-front-section__fixed__front'>
        <div className='container-front-section__fixed__front__goals'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Goals </h3>
            </div>
            <ul className='container-front-section__fixed__front__goals__txt'>
                <li className="list-section" key={front.frontGoal}>{ front.frontGoal }</li>
            </ul>
        </div> 
        <div className='container-front-section__fixed__front__bestPracices'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Best practices </h3>
            </div>
            <ul className='container-front-section__fixed__front__goals__txt'>
                <li className="list-section" key={front.bestPracticesF1}>{ front.bestPracticesF1 }</li>
                <li className="list-section" key={front.bestPracticesF2}>{ front.bestPracticesF2 }</li>
                <ul key={front.scss}><b>{ front.scss}</b>
                    <li className="list-section" key={front.scss1}> {front.scss1}</li>
                    <li className="list-section" key={front.scss2}> {front.scss2}</li>
                    <li className="list-section" key={front.scss3}> {front.scss3}</li>
                    <li className="list-section" key={front.scss4}> {front.scss4}</li>
                </ul>
                <ul key={front.html}><b>{ front.html}</b>
                    <li className="list-section" key={front.html1}> {front.html1}</li>
                    <li className="list-section" key={front.html2}> {front.html2}</li>
                </ul>
                <ul key={front.js}><b>{ front.js}</b>
                    <li className="list-section" key={front.js1}> {front.js1}</li>
                    <li className="list-section" key={front.js2}> {front.js2}</li>
                    <li className="list-section" key={front.js3}> {front.js3}</li>
                </ul>
            </ul>
        </div> 
        <div className='container-front-section__fixed__front__url'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Web on live </h3>
            </div>
            <ul className='  container-front-section__fixed__front__goals__txt'>
                <li className="list-section style-link" key={front.WebOnLive}><a className="style-link" href={ front.WebOnLive }>LINK</a></li>
            </ul>
        </div>
        <div className='container-front-section__fixed__front__git'>
            <div className="cont-subtitles">
                <h3 className="subtitles-work">Check the code</h3>
            </div>
            <ul className='  container-front-section__fixed__front__goals__txt'>
                <li className="list-section " key={front.Git}><a className="style-link"  href={ front.Git }>GITHUB</a></li>
            </ul>
        </div>
    </div>
    </>
    )
}
    export default FrontWorks;