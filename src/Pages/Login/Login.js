import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/icons/Group 573.png';

const Login = () => {
    return (
        <div className='h-screen '>
            <h1 className='pt-32 text-center text-lg font-bold mb-5'>Login With</h1>
            <div className='btn btn-ghost flex border mx-auto text-center w-1/4 rounded-full p-1'>
                <img className='w-8 h-8 ' src={googleIcon} alt="" />
                <h1 className='p-1 ml-4 pl-5'>Continue With Google</h1>
            </div>
            <div className='text-center pt-5 '>
                <p><small> Don't have an account ? <Link style={{ color: '#F63E7B' }} to='/register' className=' underline '>Create New Account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;