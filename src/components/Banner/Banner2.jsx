// eslint-disable-next-line no-unused-vars
import React from 'react';
import satelite2 from '../../assets/satelite2.jpg';

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div data-aos='fade-up' data-aos-delay='600'>
                    <img data-aos='zoom-in' data-aos-delay='400' src={satelite2} alt="" />
                </div>
                <div data-aos='fade-up' data-aos-delay='800' className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
                <p className='text-sky-800 uppercase'>Nossa Missão</p>
                <h1 className='uppercase text-5xl'>Satellite-W20</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ea. Voluptatum sapiente voluptates quia optio odit! Ipsa, debitis accusamus, aperiam quam impedit eligendi ab explicabo, nam ea voluptates esse eum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident molestias ad aspernatur id itaque doloribus, ut amet labore vero fuga vitae pariatur distinctio unde nam perferendis iusto quo consequuntur.</p>
                <button data-aos='fade-up' data-aos-delay='400'  className='primary-button'>Saiba Mais</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2