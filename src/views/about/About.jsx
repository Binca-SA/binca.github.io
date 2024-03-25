import React from 'react';
import './about.css';
import { Link } from 'react-router-dom'
// import Header from '../../components/header/Header';
// import Contact from '../../components/contact/Contact';
export default function About() {

    return<> 
    <section className='container-about mobile-margin  padding-top ' >
        {/* <Header></Header> */}
        <section className='max-width-desktop-centered'>
            <h1 className='container-about__title main-titles'>It's Binca </h1>
            <div className='flex-desk-resp marg-top-about'>
                <img className='container-about__img' src='images/about/profile.jpg' alt='profile image of Binca'></img>
                <section className='margin-top-mobile'>
                <p className='desktop-bif-font'>With a focus on improving user experiences, I combine aesthetics with problem solving to create impactful solutions by ensuring that each project has a clear purpose and effectively solves a specific need.</p>
                <br></br>
                <p className='desktop-bif-font'>My background is artistic, starting from graphic design to specialising in UX/UI and finally digital product design. I have worked both in corporate environments and as a freelancer, collaborating on projects for design and advertising agencies. This variety of experiences has equipped me with solid time management, organisation and independence at work.
I have also worked in web layout so I have an understanding of HTML and CSS syntax. I have worked with some frameworks such as React and Vue. Understanding development allows me to have a good communication and relationship with the team and stakeholders.</p>
                <br></br>
                <p className='desktop-bif-font'>What I enjoy most about my job is creating interfaces with Figma and conducting user interviews. This allows me to understand the real problem and not rely on assumptions.</p>
                </section>

            </div>
        
        <div className='flex  desk-padding'>
            <h2 className='main-titles rotation margin-top margin-bottom medium-font-desktop-titles'>Experience</h2>
            <div className='flex-center'>
                {/* <p className='max-width-p'>I started in the digital world with my studies in Graphic Design. 
                I love layout and design web pages. I like using Figma and SCSS. Another of my hobbies is the user experience 
                in the digital world, creating a friendly and understandable environment for all audiences. My goal is to improve my skills 
                and expand my knowledge, especially in web accessibility and learn more about CSS architecture to make scalable and maintainable 
                projects.</p> */}
                <section className='container-about__container-dates'>
                    {/* <div className='container-about__container-dates__circle'></div> */}
                    <div className=''>
                        <p className='p-medium-experience'>STOCKFINK | PRODUCT DESIGNER</p>
                        <br></br>
                        <p>May. 2023 - Actually</p>
                        <br></br>
                        <ul className='margin-zero'>
                            <li className='li-small-experience padding-bottom'>
                                Focused on create design solutions for artificial intelligence-based products and financial services through accessible and responsive web and app designs.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                                Involved in strategic decisions, conducting research and interviews to understand user problems and needs. 
                            </li>
                            <li className='li-small-experience padding-bottom'>
                                Improve the user experience and the effectiveness of the digital product 
                            </li>
                            <li className='li-small-experience padding-bottom'>
                                Responsible for the visual identity and brand consistency of the company, designing and overseeing all visual aspects to ensure an impactful and unified representation across all product touch points.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='container-about__container-dates margin-top'>
                    {/* <div className='container-about__container-dates__circle'></div> */}
                    <div className=''>
                        <p className='p-medium-experience'>LIVE4LIFE | UX/UI Designer</p>
                        <br></br>
                        <p>March. 2022 - May. 2023</p>
                        <br></br>
                        <ul className='margin-zero'>
                            <li className='li-small-experience padding-bottom'>
                                Responsible for the experience and design of the entire website and app.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                                Improve the user experience and the effectiveness of the digital product through user interviews, Hotjar, Google analytics, A/B testing, etc.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                                Supporting the Marketing team with campaign designs for advertisements and online/offline designs.
                            </li>
                        </ul>
                    </div>
                </section>
                
                <section className='container-about__container-dates margin-top'>
                    {/* <div className='container-about__container-dates__circle'></div> */}
                    <div className=''>
                        <p className='p-medium-experience'>MEDITERRÀNIA CREATIVA | GRAPHIC DESIGNER</p>
                        <br></br>
                        <p>Jun. 2021 - Mar. 2022</p>
                        <br></br>
                        <ul className='margin-zero'>
                            <li className='li-small-experience padding-bottom'>
                            Creating logos, branding, corporate identity and promotional material.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                            Developing designs for print, such as brochures, posters, business cards and catalogues.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                            Designing digital materials such as web banners, social media posts and website graphics.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                            Layout of magazines and corporate identity manuals.
                            </li>
                            <li className='li-small-experience padding-bottom'>
                            Video creation and editing.
                            </li>
                        </ul>
                    </div>
                </section>
                
            </div>
        </div>
        <div className='flex-column'>
            <div className='desk-padding'>
                <h2 className='main-titles margin-top margin-bottom medium-font-desktop-titles'>Education</h2>
                <div className='row-flex'>
                    <section className='container-about__container-dates margin-top'>
                            <p className='p-medium-experience'>THE HERO CAMP | COURSE DIGITAL PRODUCT DESIGNER</p>
                            <br></br>
                            <p>Jan. 2024 - Mar. 2024</p>
                    </section>
                    <section className='container-about__container-dates margin-top'>
                            <p className='p-medium-experience'>ESAT, Valencia | MATER UX/UI DESIGN, FRONT-END & DIGITAL MARKETING</p>
                            <br></br>
                            <p>Oct. 2021 - Jun. 2022</p>
                    </section>
                    <section className='container-about__container-dates margin-top'>
                            <p className='p-medium-experience'>UNIVERSITY MIGUEL HERNÁNDEZ, ALTEA | BACHELOR IN FINE ARTS AND GRAPHIC DESIGN </p>
                            <br></br>
                            <p>Sept. 2017 - Jun. 2021</p>
                    </section>
                
                </div>
            </div>
        
            <div className=''>
            <h2 className='main-titles margin-top margin-bottom medium-font-desktop-titles'>Certifications</h2>
                <div className='row-flex'>
                    <section className='container-about__container-dates margin-top'>
                        <img className="border-radius" src="images/about/certif-1.png"></img>
                    </section>
                    <section className='container-about__container-dates margin-top'>
                        <img className="border-radius" src="images/about/certif-2.png"></img>
                    </section>
                    <section className='container-about__container-dates margin-top'>
                        <img className="border-radius" src="images/about/certif-3.png"></img>
                    </section>
                
                </div>
            </div>
        </div>
        <div className='flex-end desk-padding'>
            
                <div className='container-about__tools margin-top'>
                    <p className='container-about__tools__title'>Design tools</p>
                    <ul className='container-about__tools__list'>
                        <li>Figma</li>
                        <li>MIRO</li>
                        <li>Premiere</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>After effects</li>
                        <li>InDesign</li>
                        <li>Clarity</li>
                        <li>Hotjar</li>
                        <li>Google Analytics</li>
                    </ul>
                </div>

                <div className='container-about__tools margin-top'>
                    <p className='container-about__tools__title'>Methods</p>
                    <ul className='container-about__tools__list'>
                        <li>Prototiping y wireframing</li>
                        <li>User testing and research</li>
                        <li>Journey maps</li>
                        <li>User flow</li>
                        <li>Responsive design</li>
                        <li>Information architecture</li>
                        <li>Visual design</li>
                        <li>Design systems</li>
                    </ul>
                </div>
            
            
                <div className='container-about__tools margin-top'>
                    <p className='container-about__tools__title'>Front-end development</p>
                    <ul className='container-about__tools__list'>
                        <li>HTML</li>
                        <li>UCSS</li>
                        <li>VUE (basic)</li>
                        <li>React (basic)</li>
                    </ul>
                </div>

                <div className='container-about__tools margin-top'>
                    <p className='container-about__tools__title'>Collaboration</p>
                    <ul className='container-about__tools__list'>
                        <li>Self starter</li>
                        <li>Detail oriented</li>
                        <li>Communicative</li>
                        <li>Organized</li>
                        <li>Adaptable</li>
                    </ul>
                </div>
            
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </section>
    </section>
    {/* <Contact></Contact> */}
    </>
    }
