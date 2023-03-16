import React from 'react';

const TestmonialCard = ({ img, cardTitle, position, about }) => {
    return (
        <div className="card w-90 h-80 text-black mt-7">
            <figure className="px-10 pt-10">
                <img src={img} alt={cardTitle} className="rounded-xl w-20 h-20" />
                <div className='ml-3'>
                    <h1 className="card-title font-sm">{cardTitle}</h1>
                    <p>{position}</p>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <p>{about}</p>
            </div>
        </div>
    );
};

export default TestmonialCard;