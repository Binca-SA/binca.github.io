import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import './archive.css';
import Contact from '../../components/contact/Contact';
import Modal from '../../components/modal/Modal';


function GetPhotos(){
    //for modal//
    const [active, setActive] = useState(true);

    const toggle = (title) => {
        setActive(title ? title : false);
    }

    //calling JSON//
    const [archive, setArchive] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/archive.json')
        .then(response => setArchive(response.data));
    }, [])


    //printing images//
    return (
        <>
        <section className='bg-white container-archive mobile-margin padding-top'>
            <h1 className='main-titles container-archive__title-archive'>a collection<br></br>of things<br></br>I do<span className='subtitle-style__arch'>ILLUSTRATIONS<br></br>
                COMPOSITIONS<br></br>PRINTEDS<br></br>COLOR PALETTE<br></br>and more...</span></h1>
            <div className='container-grid'>
                {archive.map(photo => (<>
                    <div className='container-grid__cont-photo'>
                        <button className='container-grid__cont-photo__btn' onClick={() => toggle(photo.title)}>
                            <img className='container-grid__cont-photo__img' key={photo.img} src={photo.img}></img>
                        </button>
                        <Modal className='container-grid__cont-photo__modal' active={active === photo.title} toggle={toggle}>
                            <img className='img-modal' key={photo.img} src={photo.img}></img>
                            <div>
                                <p className='title-modal color-white' key={photo.title}>{ photo.title }</p>
                                <p className='fit-content color-white text-m' key={photo.description}>{ photo.description }</p>
                                <p className='tools-modal color-white text-m' key={photo.tools}><i>{ photo.tools }</i></p>
                            </div>
                            
                        </Modal>
                    </div>
                </>))}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
        <Contact></Contact>
        </>
    );
}

export default GetPhotos;

// import { useEffect, useState } from 'react';
// import React from 'react';
// import axios from 'axios';
// import './archive.css';
// import Contact from '../../components/contact/Contact';
// import Modal from '../../components/modal/Modal';


// function GetPhotos(){
//     //for modal//
//     const [active, setActive] = useState(true);
//     const [activeProject, setActiveProject] = useState(undefined);

//     const toggle = () => {
//         setActive(!active);
//     }
    
//     const toggleAndSelect = (project) => {
//         setActive(!active);
//         setActiveProject(project)
//     }

//     //calling JSON//
//     const [archive, setArchive] = useState([]);

//     //getting json//
//     useEffect(() => {
//         axios.get('json/archive.json')
//         .then(response => setArchive(response.data));
//     }, [])


//     //printing images//
//     return (
//         <>
//         <section className='bg-white container-archive mobile-margin padding-top'>
//             <h1 className='main-titles container-archive__title-archive'>a collection<br></br>of things<br></br>I do<span className='subtitle-style__arch'>ILLUSTRATIONS<br></br>
//                 COMPOSITIONS<br></br>PRINTEDS<br></br>COLOR PALETTE<br></br>and more...</span></h1>
//             <div className='container-grid'>
//                 {archive.map(photo => (<>
//                     <div className='container-grid__cont-photo'>
//                         <button className='container-grid__cont-photo__btn' onClick={() => toggleAndSelect(photo)}>
//                             <img className='container-grid__cont-photo__img' key={photo.img} src={photo.img}></img>
//                         </button>
//                     </div>
//                 </>))}
//                 { activeProject && <Modal active={active} toggle={toggle}>
//                     <img className='' key={activeProject.img} src={activeProject.img}></img>
//                     <p key={activeProject.name}>{ activeProject.name }</p>
//                     <p key={activeProject.description}>{ activeProject.description }</p>
//                     <p key={activeProject.tools}>{ activeProject.tools }</p>
//                 </Modal>}
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//         </section>
//         <Contact></Contact>
//         </>
//     );
// }

// export default GetPhotos;

