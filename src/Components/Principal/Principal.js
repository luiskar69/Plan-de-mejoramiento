import React from 'react'
import NavbarApp from '../Navbar/NavbarApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../Hero/Hero.js';
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js';

const Principal = () => {
    return (
        <>
            <NavbarApp/>
            <Hero/>
            <Body/>
            <Footer/>
        </>
    )
}

export default Principal
