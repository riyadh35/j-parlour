import React from 'react';
import ServiceBanner from './ServiceBanner';
import makeup1 from '../../assets/icons/Group 1372.png'
import makeup2 from '../../assets/icons/Group 1373.png'
import makeup3 from '../../assets/icons/Group 1374.png'
const AwesomeService = () => {
    return (
        <div id='awesomservice' className='pt-14 w-100%'>
            <h1 className=' text-black text-center font-semibold text-3xl mb-9'>Our Awesome <span style={{ color: '#F63E7B' }}>Services</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-9 px-8'>
                <ServiceBanner about="We craft stunning and amazing web UI, using a well drrafted UX to fit your product." cardTitle="Anti Age Face Treatment" price="$199" img={makeup1}></ServiceBanner>
                <ServiceBanner about="Amazing flyers, social media posts and brand representations that would make your brand stand out." cardTitle="Hair Color & Styleing" price="$99" img={makeup2}></ServiceBanner>
                <ServiceBanner about="With well written codes, we build amazing apps for all platforms, mobile and web apps in general." cardTitle="Skin Care Treatment" price="$199" img={makeup3}></ServiceBanner>
            </div>
            <div className=' text-center pb-9 mt-9'>
                <button className='text-bold p-2 text-2xl rounded-md text-white'>Explore more</button>
            </div>
        </div>
    );
};

export default AwesomeService;