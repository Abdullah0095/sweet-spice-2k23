import React from 'react';
import Banner from './Banner/Banner';
import InnerPages from './InnerPages/InnerPages';
import MainCourse from './mainCourse/MainCourse';
import Navsbar from './Navbar/Navsbar';


const Home = () => {
    return (
        <div>
            <Navsbar />
            <Banner />
            <MainCourse />
            <InnerPages />
        </div>
    );
};

export default Home;