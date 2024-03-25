import React from 'react';
import Contact from '../../components/contact/Contact';
import './caudalie.css';

function Caudalie(){

    return (
        <>

<section className='container-graphic bg-white mobile-margin padding-top margin-bottom'>
<div className="container-info display-flex-living">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles">Caudalie</h1>
                    <p className="container-info__intro__p atom-margin-link text-align-center p-tweenty">Website redesign</p>
                </div>
                <img className="img-banner" src="images/caudalie/caudalie-banner.png"></img>
                <p>Overview of some screens after redesigning it</p>
                {/* <video  type="video/mp4" src="images/weliving/vide-weliving.mp4" autoPlay loop muted controls></video> */}
            </div>

            <div className="flex-row margin-top-living display-flex-living container-graphic__info">
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">The context</h3>
                        <br></br>
                        <br></br>
                        <p className='font-size-m'> Caudalie is an active-free cosmetics brand originally from France. Personally it is a brand that I consider myself a big fan of and whenever I saw their product pictures on networks and advertisements I was very inspired and wanted to buy something from there but every time I went to the website I was overwhelmed and even felt like buying something. </p>
                        <br></br>
                        <br></br>
                    
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm">The problems</h3>
                        <ul>
                            <li> The website does not represent the company well </li>
                            <br></br>
                            <li>Some images were even pixelated, which is not ideal for a brand that shows a lot of people's skin and high-end products. </li>
                            <br></br>
                            <li>The purchase flow could be made simpler and more user-friendly. </li>
                            <br></br>
                            <li>The value proposition was not being enhanced.</li>
                            <br></br>
                        </ul>
                        <br></br>
                        <p className='font-size-m'>P.S: Caudalie probably has another kind of strategy, intentions or objectives on the web, but I speak from my point of view and my external context. <strong className='hightlight-yellow'>I have done this in my spare time for fun.</strong> </p>
                    </div>
            </div> 
                        
        </section>
        
        <Contact></Contact>
        </>
    );
}

export default Caudalie;