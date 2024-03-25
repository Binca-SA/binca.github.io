import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navegation from '../navegation/Navegation';
import './header.css';



export default function Header() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <section className='container-header'>
            <div className='logo'>
                <a href='/binca-portfolio/'  className='home-link link hover-style'>BS</a>
            </div>
            <div className='navbar'>
                <Link to='#' onClick={showSidebar} className='menu-bars link hover-style'>MENU</Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'} id='navbar'>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menuBars link '><b>X</b></Link>
                    </li>
                    <Navegation></Navegation>
                </ul>
            </nav>
        </section> 
    </>
)}
