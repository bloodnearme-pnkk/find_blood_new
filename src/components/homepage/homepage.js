import React, { useState } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Homepagedata from './homepagedata';

const Homepage = () => {
    const [showBasic, setShowBasic] = useState(false);

    return (
        // <div className="homepage">
        // <h1>Hello Homepage</h1>
        // <div className="button">Logout</div>
        // </div>
        <>
        <Navigation/>
        <Homepagedata/>
        <Footer/>

        </>
        
    );
}

export default Homepage