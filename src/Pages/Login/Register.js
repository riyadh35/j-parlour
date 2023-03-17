import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/icons/Vector.png'
import googleIcon from '../../assets/icons/Group 573.png';

const Register = () => {
    return (
        <div className='screen pt-9 justify-center mx-auto'>
            <form action="" className='text-center border max-w-lg max-h-lg mx-auto'>
                <h1 className='text-2xl font-semibold justify-start'>Create an account</h1>
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />
                <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs m-2" /> <br />

                <button
                    id='botton'
                    className='font-semibold w-80 p-3 m-2 rounded-lg text-white'>Create an account
                </button>
                <div className='text-center pt-5 m-2'>
                    <p><small> Already have an account ? <Link style={{ color: '#F63E7B' }} to='/login' className=' underline '>Login</Link></small></p>
                </div>
            </form>
            <div className="divider max-w-xs mx-auto">OR</div>
            <div className='pb-9'>
                <div className='btn btn-ghost flex mx-auto text-center w-1/4 rounded-full mb-7'>
                    <img className='w-8 h-8 ' src={googleIcon} alt="" />
                    <h1 className='p-1 ml-4 pl-5'>Continue With Google</h1>
                </div>
                <div className='btn btn-ghost flex border mx-auto text-center w-1/4 rounded-full mb-7'>
                    <img className='w-8 h-8 text-success' src={facebookIcon} alt="" />
                    <h1 className='p-1 ml-4 pl-5'>Continue With Facebook</h1>
                </div>
            </div>
        </div>
    );
};

export default Register;