import React from 'react';



function LivePage(){
    return (
        <>

        <section className='container-graphic bg-white mobile-margin padding-top margin-bottom'>
            <div className="container-info">
                <div className='container-info__intro'>
                    <h1 className="container-info__intro__title main-titles">Live4life</h1>
                    <p className="container-info__intro__p atom-margin-link">Online platform for renting flats for students and young professionals. </p>
                    <p>JOB POSITION:</p>
                    <p>In charge of the UX/UI of the entire website. Creation of a scalable design and subsequent help in the layout with SASS to the development team for its implementation.</p>
                </div>
                {/* <video  type="video/mp4" src="images/weliving/vide-weliving.mp4" autoPlay loop muted controls></video> */}
            </div>

            <div className="flex-row margin-top-living">
                <div className="container-graphic__info">
                    <div className="cont-subtitles">
                        <h3 className="subtitles-work padding-top">Needs Solved</h3>
                        <p>THIS PAGE IS IN PROCESS OF CREATION, meanwhile I leave you the link of the web page: </p>
                        <a className='cta-btn-red color-red' href='https://live4life.site/' target={'_blank'}>> View WEBSITE</a>
                    </div>
                </div>

            </div>

        </section>
        </>
    );
}

export default LivePage;