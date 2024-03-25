import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';


function LiveCard(){
    return (
        <>

            <div  className='container-cards__card'>
                <Link className='container-cards__card__link link-properties' to="live">
                
                        <div className='cont-text'>
                            <p className='container-cards__card__title'>Live</p>
                            <p className='container-cards__card__desc'>uxd</p>
                            <ul className='container-cards__card__tools'>
                                <li></li>
                            </ul>
                        </div>    

                        {/* <div className='cont-img'>
                            <img className='container-cards__card__container-img' src={card.img}></img>
                        </div> */}
                    
                </Link>
            </div>

        </>
    );
}

export default LiveCard;

