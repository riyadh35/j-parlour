import React from 'react';
import Login from '../Login/Login';
import AwesomeService from './AwesomeService';
import Banner from './Banner';
import Banner2 from './Banner2';
import Footer from './Footer';
import Message from './Message';
import Testmonial from './Testmonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AwesomeService></AwesomeService>
            <Banner2></Banner2>
            <Testmonial></Testmonial>
            <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;