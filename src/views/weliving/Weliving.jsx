import React from 'react';
import Contact from '../../components/contact/Contact';
import './weliving.css';

function WeLiving(){

    return (
        <>

        <section className='container-graphic bg-white mobile-margin padding-top margin-bottom'>
            <div className="container-info display-flex-living">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles">We Living</h1>
                    <p className="container-info__intro__p atom-margin-link text-align-center">Luxury living for university students. </p>
                </div>
                <video  type="video/mp4" src="images/weliving/vide-weliving.mp4" autoPlay loop muted controls></video>
            </div>

            <div className="flex-row margin-top-living display-flex-living">
                <div className="container-graphic__info">
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work padding-top text-align-center">Needs Solved</h3>
                        <p className='text-align-center'>Simple design of a website to be made with Wordpress. The main objective is to show the university students the quality of life they will have when renting one of the studios of the coliving. 
                        Showing mainly the facilities, the services offered and the cities where to find these colivings.
                        </p>
                    </div>

                    <div className="cont-subtitles">
                        <h3 className="subtitles-work margin-top-sm text-align-center">Tools</h3>
                        <p className='text-align-center'>Designed and prototiped with Figma</p>
                    </div>
                </div>

                <div className="flex-row ">
                    <div className='container-front__imgs'>
                        <img className="img-front border-radius" src="images/weliving/weliving-1.png"></img>
                        <img className="img-front border-radius" src="images/weliving/weliving-2.png"></img>
                        <img className="img-front border-radius" src="images/weliving/weliving-3.png"></img>
                        <img className="img-front border-radius" src="images/weliving/weliving-4.png"></img>
                        <img className="img-front border-radius" src="images/weliving/weliving-5.png"></img>
                    </div>
                </div>
            </div>

        </section>
        <Contact></Contact>
        </>
    );
}

export default WeLiving;