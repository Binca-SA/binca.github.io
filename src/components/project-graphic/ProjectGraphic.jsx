import React from "react";
import './projectGraphic.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from "react-router-dom";
import Contact from "../contact/Contact";



function GraphicWorks(){
    const [graphic, setGraphic] = useState({});

    const parameters = useParams();
    //getting json//
    useEffect(() => {
        axios.get('../json/works.json')
            .then(response => {
                const selectedProject = response.data.find(project => project.id === parameters.id)
                setGraphic(selectedProject)
            });
    }, [])


    return (
    <>
        <section className='container-graphic bg-white mobile-margin padding-top margin-bottom'>
            <div className="container-info">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles" key={graphic.name}>{ graphic.name }</h1>
                    <p className="container-info__intro__p atom-margin-link" key={graphic.introduction}>{graphic.introduction}</p>
                </div>
            </div>
            <div className="flex-row">
                <div className="container-graphic__info">
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work padding-top">Needs Solved</h3>
                        <p key={graphic.needs}>{ graphic.needs }</p>
                        <ul>
                            <li className="list-section">{ graphic.needs1 }</li>
                            <li className="list-section">{ graphic.needs2 }</li>
                            <li className="list-section">{ graphic.needs3 }</li>
                            <li className="list-section">{ graphic.needs4 }</li>
                            <li className="list-section">{ graphic.needs5 }</li>
                        </ul>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Objective</h3>
                        <ul>
                            <li className="list-section">{ graphic.obj1 }</li>
                            <li className="list-section">{ graphic.obj2 }</li>
                            <li className="list-section">{ graphic.obj3 }</li>
                            <li className="list-section">{ graphic.obj4 }</li>
                        </ul>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work">Tools</h3>
                        <ul>
                            <li className="list-section">{ graphic.tool1 }</li>
                            <li className="list-section">{ graphic.tool2 }</li>
                            <li className="list-section">{ graphic.tool3 }</li>
                            <li className="list-section">{ graphic.tool4 }</li>
                        </ul>
                    </div>
                </div>

                <div className="flex-row">
                    <div className='container-front__imgs'>
                        <img className="img-front" key={graphic.image1} src={graphic.image1}></img>
                        <img className="img-front" key={graphic.image2} src={graphic.image2}></img>
                        <img className="img-front" key={graphic.image3} src={graphic.image3}></img>
                        <img className="img-front" key={graphic.image4} src={graphic.image4}></img>
                        <img className="img-front" key={graphic.image5} src={graphic.image5}></img>
                    </div>
                </div>
            </div>
        </section>
        <Contact></Contact>
    </>
    )
}
    export default GraphicWorks;