import React from 'react';
import nofoundicon from './notfoundicon.svg'
const NotFound = () => {
    return (
        <div className='bg-gradient-to-r from-cyan-900 to-cyan-400 py-1 h-8/12 md:h-screen'>
            <img className='w-6/12 md:w-4/12 mt-12 block mx-auto' src={nofoundicon} alt="" />
        </div>
    );
};

export default NotFound;