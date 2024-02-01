import React from 'react';
import  "./Loader.css";

const Loader = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
    <div className='spinner'> </div>
    <p className='text-lg text-bgDark font-semibold'>Loading...</p>
    </div>
  )
}

export default Loader;

