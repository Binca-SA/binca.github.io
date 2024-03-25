import React from 'react';
import './books.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Contact from '../../components/contact/Contact';

export default function Books() {
    
    //calling JSON//
    const [archive, setArchive] = useState([]);

    //getting json//
    useEffect(() => {
        axios.get('json/books.json')
        .then(response => setArchive(response.data));
    }, [])


    //printing imaginfoes//
    
    return(
        <>
            <section className=' bg-white  container-archive ' >
            <h1 className='mobile-margin padding-top section-books main-titles section-books__title'>books <br></br>summaries<span className='section-books__subtitle'>I RECOMEND<br></br>
                READ<br></br>AND REREAD</span></h1>
            {archive.map(book => (<>
                    <div className='container__book'>
                        <div className='interior-padding'>
                            <p className='container__book__title' key={book.title}>{ book.title }</p>
                            <p className='container__book__author' key={book.author}>{ book.author }</p>
                            <div className='display-flex-row'>
                                <p className='container__book__category' key={book.category}>
                                    { book.category }
                                </p>
                                <p>
                                    { book.categoryTwo }
                                </p>
                                <p>
                                    { book.categoryThree }
                                </p>
                                <p>
                                    { book.categoryFour }
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </>))}
            </section>
            <Contact></Contact>
        </>
    ); 
}