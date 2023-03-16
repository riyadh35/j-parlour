import React from 'react';

const Message = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold pt-36'>Let us handle your <br />
                project, professionally.</h1>

            <div className='pt-20 text-center  pb-20'>
                <div >
                    <input type="text" placeholder="Your Name" className="input  input-ghost w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" className="input input-ghost w-full max-w-xs m-4" /> <br />
                    <input type="email" placeholder="Email Address" className="input input-ghost w-full max-w-xs" />
                    <input type="tel" placeholder="Phone Number" className="input input-ghost w-full max-w-xs m-4" />
                </div>
                <textarea className="textarea textarea-ghost w-1/2 max-w-xx m-4 " placeholder="Bio"></textarea>
            </div>
        </div>
    );
};

export default Message;