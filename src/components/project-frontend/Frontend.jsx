import React from "react";
import './frontend.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Front from "../front/Front";
import Ux from "../ux/Ux";
import { useParams } from "react-router-dom";
import Contact from "../contact/Contact";
function FrontWorks(){

    //activate buttons
    const [active, setActive]= useState("ux");

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
        <section className='container-front bg-white mobile-margin padding-top margin-bottom'>
            <div className="container-info">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles" key={front.name}>{ front.name }</h1>
                    <p className="container-info__intro__p atom-margin-link" key={front.introduction}>{front.introduction}</p>
                </div>
                <video  type="video/mp4" src={front.video} autoPlay loop muted controls></video>
            </div>
            <div className="container-front__btns">
                <button className={"container-front__btns__btn " + (active === 'ux' ? 'active' : '')} onClick={() => setActive("ux")}>UX | UI</button>
                <button className={"container-front__btns__btn " + (active === 'front' ? 'active' : '')} onClick={() => setActive("front")}>Frontend</button>
            </div>
            <div className="flex-row">
                {active === "ux" && <Ux></Ux>}
                {active === "front" && <Front></Front>}
                
                <div className='container-front__imgs'>
                    <img className="img-front border-radius" key={front.image1} src={front.image1}></img>
                    <img className="img-front border-radius" key={front.image2} src={front.image2}></img>
                    <img className="img-front border-radius" key={front.image3} src={front.image3}></img>
                    <img className="img-front border-radius" key={front.image4} src={front.image4}></img>
                </div>
            </div>
        </section>
        <Contact></Contact>
    </>
    )
}
    export default FrontWorks;