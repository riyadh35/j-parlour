import React from 'react';

const ServiceBanner = ({ img, cardTitle, price, about }) => {
    return (
        <div className="card w-90 h-80 text-black shadow-xl mt-7">
            <figure className="px-10 pt-10">
                <img src={img} alt={cardTitle} className="rounded-xl w-20 h-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{cardTitle}</h2>
                <p className='text-center'>{price}</p>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default ServiceBanner;