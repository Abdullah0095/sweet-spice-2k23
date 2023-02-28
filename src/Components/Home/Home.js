import React from 'react';
import Banner from './Banner/Banner';
import InnerPages from './InnerPages/InnerPages';
import Navsbar from './Navbar/Navsbar';


const Home = () => {
    return (
        <div>
            <Navsbar />
            <Banner />
            <InnerPages />
        </div>
    );
};

export default Home;