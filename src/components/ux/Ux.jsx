import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ux.css';


function UxWorks(){

    const [ux, setUx] = useState({});

    const parameters = useParams();
    //getting json//
    useEffect(() => {
        axios.get('../json/works.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id)
                setUx(selectedProject)
            });
    }, [])

    return (
    <>
    <div className='container-front-section__fixed__ux'>
        <div className='container-front-section__fixed__ux__goals'>
            <div aria="button" className="cont-subtitles">
                <h3 className="subtitles-work">Goals </h3>
            </div>
            <ul className='container-front-section__fixed__ux'>
                <li className="list-section" key={ux.goal1}>{ ux.goal1 }</li>
                <li className="list-section" key={ux.goal2}>{ ux.goal2 }</li>
            </ul>
        </div> 
        
        <div className='container-front-section__fixed__ux__bestPractices'>
            <div aria="button" className="cont-subtitles">
                <h3 className="subtitles-work">Best Practices </h3>
            </div>
            <ul className='container-front-section__fixed__ux'>
                <li className="list-section" key={ux.bestPractices1}>{ ux.bestPractices1 }</li>
                <li className="list-section" key={ux.bestPractices2}>{ ux.bestPractices2 }</li>
                <li className="list-section" key={ux.bestPractices3}>{ ux.bestPractices3 }</li>
                <li className="list-section" key={ux.bestPractices4}>{ ux.bestPractices4 }</li>
                <li className="list-section" key={ux.bestPractices5}>{ ux.bestPractices5 }</li>
            </ul>
        </div>
        <div className='container-front-section__fixed__ux__bestPractices'>
            <div aria="button" className="cont-subtitles">
                <h3 className="subtitles-work" key={ux.uxTitle}>{ ux.newTitle } </h3>
            </div>
            <ul className='container-front-section__fixed__ux'>
                <li className="list-section" key={ux.uxThings}>{ ux.uxThings }</li>
                <li className="list-section" key={ux.uxThings}>{ ux.uxThings }</li>
                <li className="list-section" key={ux.uxThings}>{ ux.uxThings }</li>
                <li className="list-section" key={ux.uxThings}>{ ux.uxThings }</li>
                <li className="list-section" key={ux.uxThings}>{ ux.uxThings }</li>
            </ul>
        </div>
        <div className='container-front-section__fixed__ux__wireframes'>
            <div aria="button" className="cont-subtitles">
                <h3 className="subtitles-work">Wireframes </h3>
            </div>
            <img className="container-front-section__fixed__ux img-ux" key={ux.wireframes} src={ux.wireframes}></img>
        </div>
    </div>
    </>
    )
}
    export default UxWorks;