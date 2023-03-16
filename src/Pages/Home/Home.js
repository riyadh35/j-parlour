import React from 'react';
import AwesomeService from './AwesomeService';
import Banner from './Banner';
import Banner2 from './Banner2';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AwesomeService></AwesomeService>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;