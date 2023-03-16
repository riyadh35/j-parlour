import React from 'react';
import asian from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mb-7 ">
                    <img src={asian} alt='' className="max-w-sm rounded-lg" />
                    <div className='text-black '>
                        <h1 className="text-5xl font-bold">BEAUTY SALON <br />
                            FOR EVERY WOMEN</h1>
                        <p className="py-6 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <button id='botton' className="btn text-white">Get an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;