// eslint-disable-next-line no-unused-vars
import React from 'react';

import Mountain from '../../assets/mountain.png'
const Hero = () => {
  return (
    <div className='bg-black/10 h-full text-white relative z-50'>
    <div className='h-full flex justify-center items-center p-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
                <h1 data-aos='fade-up' className='text-5xl font-bold uppercase'>Órbitra da Terra </h1>
                <p data-aos='fade-up'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam est beatae quia reprehenderit dicta, odit iusto fuga magnam perferendis nesciunt assumenda aliquam sed id sequi numquam? Animi, quas eligendi.
                </p>
                <button data-aos='fade-up' className='primary-button'>
                  Saiba Mais
                </button>
            </div>
            <div></div>
        </div>
    </div>
    {/* surgace section */}
    <img data-aos='fade-up' src={Mountain} alt=""
    className='absolute right-0 bottom-0 w-full brightness-40 z-10 h-40'
     />
     {/*bottom gradient section */}

     <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero