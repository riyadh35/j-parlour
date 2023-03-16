import React from 'react';
import asian from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import Navbar from '../Shared/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mb-7">
                    <img src={asian} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-black'>
                        <h1 className="text-5xl font-bold">BEAUTY SALON <br />
                            FOR EVERY WOMEN</h1>
                        <p className="py-6 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;