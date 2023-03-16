import React from 'react';
import TestmonialCard from './TestmonialCard';
import review1 from '../../assets/images/Ellipse 90.png';
import review2 from '../../assets/images/Ellipse 91.png';
import review3 from '../../assets/images/Ellipse 92.png';


const Testmonial = () => {
    return (
        <div id='awesomservice' className='pt-14 w-100%'>
            <h1 className=' text-black text-center font-semibold text-3xl mb-9'>Testimonials <span style={{ color: '#F63E7B' }}>Services</span></h1>
            <div className='grid sm:grid-cols-1 shadow-sm md:grid-cols-2 lg:grid-cols-3 gap-5 pb-9 px-8'>
                <TestmonialCard about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat " cardTitle="Nash Patrik" position="CEO, Manpol" img={review1}></TestmonialCard>
                <TestmonialCard about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat " cardTitle="Miriam Barron" position="CEO, Manpol" img={review2}></TestmonialCard>
                <TestmonialCard about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat " cardTitle="Bria Malone" position="CEO, Manpol" img={review3}></TestmonialCard>
            </div>
        </div>
    );
};

export default Testmonial;