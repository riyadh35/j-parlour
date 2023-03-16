import React from 'react';
import img from '../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const Banner2 = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className="max-w-md rounded-lg shadow-2xl" />
                <div className='ml-9'>
                    <h1 className="text-5xl font-bold">Let us handle your <br /> screen <span style={{ color: '#F63E7B' }} >Professionally.</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. In deleniti <br /> eaque aut repudiandae et a id nisi.</p>
                    <div className='hero-content lg:flex-row'>
                        <div>
                            <h1 style={{ color: '#F63E7B' }} className='font-bold text-4xl'>500+</h1>
                            <h3 className='font-semibold'>Happy Customer</h3>
                        </div>
                        <div>
                            <h1 style={{ color: '#F63E7B' }} className='font-bold text-4xl'>16+</h1>
                            <h3 className='font-semibold'>Total Service</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner2;